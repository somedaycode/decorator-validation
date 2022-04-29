### 데코레이터로 Validation 구현 실습

- used only **Property Decorators**
- 기존의 class-validator를 참고하였음

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

참고한 `class-validator`는 어떻게 `reflect-metadata`를 활용한지 아직 잘 모르겠다. 아무리 찾아봐도 패키지는 설치되어있는데 어디서 활용한건지는 모르겠다

데코레이터를 이용하면 꽤나 범용적으로 활용할 수 있게 함수를 만들 수 있을듯

말 그대로 함수를 꾸며주는 함수같은 느낌?