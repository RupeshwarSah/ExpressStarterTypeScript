import { AsyncLocalStorage } from "node:async_hooks";
type asyncLocalStorage = {
  correlationId: string;
};

export const asyncLocalStorage = new AsyncLocalStorage<asyncLocalStorage>();
