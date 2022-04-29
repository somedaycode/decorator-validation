import { errorLogStore } from '../../index';

export function isMinLength(value: unknown, min: number): boolean {
  return typeof value === 'string' && value.length >= min;
}

export function MinLength(min: number) {
  return function (target: any, propertyKey: string): any {
    let value = target[propertyKey];

    function validate() {
      if (!isMinLength(value, min)) {
        return errorLogStore.addErrorLog(
          `failed minLength Validation : ${min}`
        );
      }
      return value;
    }

    function setter(newVal: number) {
      value = newVal;
    }

    return {
      get: validate,
      set: setter,
      enumerable: true,
    };
  };
}
