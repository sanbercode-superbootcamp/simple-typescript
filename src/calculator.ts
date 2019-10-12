class Calculator {
  angka1: number;
  angka2: number;
  constructor(input1: number, input2:number) {
      this.angka1 = input1;
      this.angka2 = input2
  }
  plus() {
      return this.angka1+this.angka2
  }
  minus(){
    return this.angka1-this.angka2
  }
  kali(){
    return this.angka1*this.angka2
  }
  bagi(){
    return this.angka1/this.angka2
  }
}

export { Calculator }