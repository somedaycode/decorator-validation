export function minLength(value: unknown, min: number): boolean {
  return typeof value === 'string' && value.length >= min;
}

export function MinLength(min: number) {
  return function (target: any, propertyKey: string): any {
    let value = target[propertyKey];

    function validate() {
      if (!minLength(value, min)) throw `failed Max Validation : ${min}`;
      return value;
    }

    function setter(newVal: number) {
      value = newVal;
    }

    return {
      get: validate,
      set: setter,
    };
  };
}
