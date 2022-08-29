import { Component, OnInit } from '@angular/core';
import { Payment } from '../interface/payment';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {


  payment: Payment = {
    amount: "", ccNum: "", email: "", expDate: ""
  }
  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    
  }

  pay() {
    this.payment.email  = localStorage.getItem("email") as string 
    console.log(this.payment);
    this.paymentService.chargeCC(this.payment).subscribe(resp=>{
        console.log(resp);
        alert("payment done");
    })
  }
}
