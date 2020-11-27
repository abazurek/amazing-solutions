import { delay } from "./service/delay";

type Results = {};

const promise = (num1: number): Promise<Results> => {
  return new Promise((res, rej) => {
    res(num1);
    rej("CatchError");
  });
};

test("get result after delay", (done) => {
  promise(10)
    .then(delay(700))
    .then((result) => expect(result).toEqual(60))
    .catch((err) => console.log(err));
  done();
});
