import 'reflect-metadata';

/*
 * Class Validator에서 reflect-metadata는 어떻게 활용을 한거지..
 */

// class MetaData {
//   public type;
//   public target;
//
//   constructor(type: string, target: any) {
//     this.type = type;
//     this.target = target;
//   }
// }

export function checkMaxNumber(num: unknown, max: number): boolean {
  return typeof num === 'number' && num <= max;
}

export function Max(maxNumber: number) {
  return function (target: any, propertyKey: string): any {
    let value = target[propertyKey];

    function validate() {
      if (!checkMaxNumber(value, maxNumber))
        throw `failed Max Validation : ${maxNumber}`;
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
