import './main.scss';

function add_1(n1:number, n2:number, showResult:boolean, resultPhrase:string) {
  const res = n1 + n2;
  if(showResult) {
    console.log(resultPhrase + res);
  }else {
    return res;
  }
}

let result: number;
result = 4;
const number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

add_1(number1, number2, printResult, resultPhrase);