// Input calculation
class addin { 
    value1: number;
    value2: number;
    result: number;
    
    constructor(a:number, b:number) { 
       this.value1 = a;
       this.value2 = b;
       this.result = a + b;
    } 
 } 
 class subin { 
    value1: number;
    value2: number;
    result: number;
    
    constructor(a:number, b:number) { 
       this.value1 = a;
       this.value2 = b;
       this.result = a - b;
    } 
 } 
class mulin { 
    value1: number;
    value2: number;
    result: number;
    
    constructor(a:number, b:number) { 
       this.value1 = a;
       this.value2 = b;
       this.result = a * b;
    } 
} 
class divin { 
    value1: number;
    value2: number;
    result: number;
    
    constructor(a:number, b:number) { 
       this.value1 = a;
       this.value2 = b;
       this.result = a / b;
    } 
} 

 // Output calculation
class addout extends addin { 
    prints():void { 
       console.log(`Hasil perhitungan ${this.value1} + ${this.value2} = ${this.result}`); 
    } 
}
class subout extends subin { 
    prints():void { 
       console.log(`Hasil perhitungan ${this.value1} - ${this.value2} = ${this.result}`); 
    } 
 }
 class mulout extends mulin { 
    prints():void { 
       console.log(`Hasil perhitungan ${this.value1} x ${this.value2} = ${this.result}`); 
    } 
 }
 class divout extends divin { 
    prints():void { 
       console.log(`Hasil perhitungan ${this.value1} : ${this.value2} = ${this.result}`); 
    } 
 }

let add = new addout(3, 2); add.prints();
let sub = new subout(3, 2); sub.prints();
let mul = new mulout(3, 2); mul.prints();
let div = new divout(3, 2); div.prints();
