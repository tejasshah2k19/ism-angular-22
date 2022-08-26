import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
 import { ToastrService } from 'ngx-toastr';
import { Role } from '../role';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roles: Array<any> = []
  roleName:string="" 
  display=false
   
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.getAllRoles()
  }

  deleteRole(id: any) {
    // console.log("delete role called..."+id);
    this.userService.deleteRole(id).subscribe(resp => {
      this.toastr.success("Role Deleted...")
      this.roles = this.roles.filter(r => r.roleId != id)

      //roles -> 17
      // let newRoles=[] 
      // for(let i=0;i<this.roles.length;i++){
      //   if(this.roles[i].roleId != id){
      //     newRoles.push(this.roles[i]);
      //   }
      // }
      // this.roles = newRoles 

    }, err => {
      console.log(err);
      this.toastr.error(err);
    })
  }
  viewRole(roleId:any){
      this.userService.getRoleByIdApi(roleId).subscribe(resp=>{
        // alert(resp.roleName)
        this.roleName = resp.roleName
        this.display=true 
         
      },err=>{
        this.toastr.error(err)
      })
  }
  getAllRoles() {
    this.userService.getAllRoles().subscribe(resp => {
      console.log("get all roles==>");
      console.log(resp);
      this.roles = resp;
    })
  }

}
