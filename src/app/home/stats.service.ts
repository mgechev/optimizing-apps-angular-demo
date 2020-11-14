import { Injectable } from '@angular/core';
import { PeriodicElement } from './table.data';

let messageId = 0;

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private cache = new Map();
  private pending = new Map();
  private resolves = new Map();
  private worker = new Worker('./stats.worker', { type: 'module' });

  constructor() {
    this.worker.addEventListener('message', (ev) => {
      const { data } = ev;
      const { id, result } = data;
      if (this.resolves.has(id)) {
        this.resolves.get(id)(result);
      }
      this.resolves.delete(id);
    });
  }

  calculate(data: PeriodicElement[]): Promise<number> | number {
    if (this.cache.has(data)) {
      return this.cache.get(data);
    }
    if (this.pending.has(data)) {
      return this.pending.get(data);
    }
    messageId++;
    this.worker.postMessage({ id: messageId, arr: data });
    const pending = new Promise<number>(resolve => {
      this.resolves.set(messageId, resolve);
    }).then(result => {
      this.pending.delete(data);
      this.cache.set(data, result);
      return result;
    });
    this.pending.set(data, pending);
    return pending;
  }
}
