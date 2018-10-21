'use strict';

const { isArray } = Array;

export function assertValidIdentifier(name: string) {
  if (!/[a-zA-Z]+[_$a-zA-Z0-9]*/.test(name))
    throw new Error(`invalid identifier ${name}`);
}
export function assertNonEmptyString(value: string) {
  if (typeof value !== 'string') {
    throw new Error(`${value} not a string`)
  }
  if (!value.trim()) {
    throw new Error(`${value} cannot be empty string`)
  }
}
export function isDefined(value: any) {
  return !(value === null || value === undefined || value === '' || (isArray(value) && value.length === 0));
}



