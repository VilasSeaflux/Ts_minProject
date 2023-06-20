"use strict";
exports.__esModule = true;
var Invoice = /** @class */ (function () {
    // private  client : string;
    // public details : string;
    // readonly amount : number;
    //If you are using access modifiers then you can do the following
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // constructor(c:string,d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    Invoice.prototype.format = function () {
        return this.client + " owes $ " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
