const { expect } = require('chai')
const { Calculator } = require('../dist/calculator')

describe('Calculator', function(){
    describe('Plus', function(){
        it('should do operation 1+2=3', function(){
            let hitung = new Calculator(1, 2)
            expect(hitung.plus()).to.be.eq(3)
        })
        it('should do operation 2+3=5', function(){
            let hitung = new Calculator(2, 3)
            expect(hitung.plus()).to.be.eq(5)
        })
    })
    describe('Minus', function(){
        it('should do operation 1-2=-1', function(){
            let hitung = new Calculator(1, 2)
            expect(hitung.minus()).to.be.eq(-1)
        })
        it('should do operation 3-2=1', function(){
            let hitung = new Calculator(3, 2)
            expect(hitung.minus()).to.be.eq(1)
        })
    })
    describe('Kali', function(){
        it('should do operation 1*2=2', function(){
            let hitung = new Calculator(1, 2)
            expect(hitung.kali()).to.be.eq(2)
        })
        it('should do operation 2*3=6', function(){
            let hitung = new Calculator(2, 3)
            expect(hitung.kali()).to.be.eq(6)
        })
    })
    describe('Bagi', function(){
        it('should do operation 1/2=0.5', function(){
            let hitung = new Calculator(1, 2)
            expect(hitung.bagi()).to.be.eq(1/2)
        })
        it('should do operation 2/3', function(){
            let hitung = new Calculator(2, 3)
            expect(hitung.bagi()).to.be.eq(2/3)
        })
    })
})