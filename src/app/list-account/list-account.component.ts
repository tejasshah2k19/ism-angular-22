import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  accounts: Array<any> = []
  ngOnInit(): void {
    let userId = localStorage.getItem("userId") as string
    this.accountService.getAccountByUser(userId).subscribe(resp => {
      this.accounts = resp.data 
    })
  }


}
