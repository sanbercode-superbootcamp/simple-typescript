class Calculator {
    result: number
    number1 : number
    number2 : number
    
    constructor(par1 : number, par2 : number) {
        this.number1 = par1
        this.number2 = par2
    }
    plus() {
        this.result = this.number1 + this.number2
        return this.result
    }
    minus() {
        this.result = this.number1 - this.number2
        return this.result
    }
    multiply() {
        this.result = this.number1 * this.number2
        return this.result
    }
    division() {
        this.result = this.number1 / this.number2
        return this.result
    }
}
