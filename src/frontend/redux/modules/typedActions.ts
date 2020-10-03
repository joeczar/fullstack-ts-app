export type typedAction = { type: string; payload: any };

export function createTypedAction<T extends string>(type: T): { type: T };
export function createTypedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function createTypedAction(type: string, payload?: any): typedAction {
  return { type, payload };
}
