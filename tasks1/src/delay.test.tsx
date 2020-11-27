import {delay} from "./service/delay";

type Results={};

const promise = (num1: number, num2:number): Promise<Results> => {
    return new Promise((res, rej) => {
        const result:number=num1+num2
      res(result)
        rej("CatchError")
    });
}

test('get result after delay', done => {
    promise(10, 50).then(delay(700)).then((result)=>expect(result).toEqual(60)).catch(err=>console.log(err));
    done();
})
