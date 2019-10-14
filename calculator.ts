class calculateor{
constructor(){
let result: number;
}


tambah(a: number, b: number){
this.result = a + b;

}

kurang(a: number, b: number){
this.result = a - b;

}

kali(a: number, b: number){
this.result = a * b;

}

bagi(a: number, b: number){
this.result = a / b;

}
}


const calc = new calculateor();
calc.tambah(1, 2);
console.log(calc.result);

calc.kurang(calc.result, 1);
console.log(calc.result);

calc.kali(calc.result, 2);
console.log(calc.result);

calc.bagi(calc.result, 2);
console.log(calc.result);