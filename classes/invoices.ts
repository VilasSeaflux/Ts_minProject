class Invoice {
    // private  client : string;
    // public details : string;
    // readonly amount : number;
    //If you are using access modifiers then you can do the following
   
    constructor(
        private client: string,
        public details : string,
        readonly amount : number
    ){}
    // constructor(c:string,d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    format(){
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}

export {Invoice};