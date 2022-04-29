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
  public name: string;

  @Max(10)
  public age: number;
}

export const errorLogStore = new ErrorLogStore();

const main = () => {
  const somedaycode = new Person();
  somedaycode.name = 'Q';
  somedaycode.age = 14;

  validator(somedaycode);
  errorLogStore.throwIfHasErrorLogs(); // throw errors

  console.log('출력이 되나요?'); // 출력 안됨
};

main();
