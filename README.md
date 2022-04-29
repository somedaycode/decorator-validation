### 데코레이터로 Validation 구현 실습

- used only **Property Decorators**
- 기존의 class-validator를 참고하였음

#### try1

```ts
/* src/index.js */

class Person {
  @MinLength(2)
  name: string;

  @Max(20)
  age: number;
}

const main = () => {
  const somedaycode = new Person();
  somedaycode.name = 'Q';
  somedaycode.age = 14;

  try {
    const printYourName = (input: Person) => input.name;
    const printYourAge = (input: Person) => input.age;

    printYourName(somedaycode); // fail
    printYourAge(somedaycode); // fail
  } catch (e: any) {
    throw new Error(e.message);
  }
};

main();

```

----

#### try2

ErrorLogStore 추가 및 validator 함수 추가

```ts
import { Max } from './decorator/number/max';
import { MinLength } from './decorator/string/minLength';
import { ErrorLogStore } from './errorStore';
import { validator } from './validator';

/*
 *
 * 참고 Github (Class-Validator)
 * @See:https://github.com/typestack/class-validator/blob/f7a46abd481c9ba4523573ff8cf0f399a6f8ac0e/src/container.ts#L50
 *
 * */

class Person {
  @MinLength(2)
  name: string;

  @Max(10)
  age: number;
}

export const errorLogStore = new ErrorLogStore();

const main = () => {
  const somedaycode = new Person();
  somedaycode.name = 'Q';
  somedaycode.age = 14;

  validator(somedaycode);
  errorLogStore.printErrorLogs();
};

main();
```

```js
[
  {
    message: 'Error: failed minLength Validation : 2',
    path: '    at ErrorLogStore.parseError (/Users/kimseonkyu/personal/decorator-validation/dist/errorStore/index.js:16:23)'
  },
  {
    message: 'Error: failed Max Validation : 10',
    path: '    at ErrorLogStore.parseError (/Users/kimseonkyu/personal/decorator-validation/dist/errorStore/index.js:16:23)'
  }
]
```

---
참고한 `class-validator`는 어떻게 `reflect-metadata`를 활용한지 아직 잘 모르겠다. 아무리 찾아봐도 패키지는 설치되어있는데 어디서 활용한건지는 모르겠다

데코레이터를 이용하면 꽤나 범용적으로 활용할 수 있게 함수를 만들 수 있을듯

말 그대로 함수를 꾸며주는 함수같은 느낌?