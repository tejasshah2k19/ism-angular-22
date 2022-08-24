import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getAllRoles(): Observable<any> {

    // let headers = new HttpHeaders().set("authToken","dummytoken111111");

    // let headers = new HttpHeaders();
    // headers = headers.append('authToken', '123456789123456242')
    // console.log(headers.get("authToken"));
    
    return this.http.get(environment.url + "admin/role")
  }

  addRole(role:any):Observable<any>{
    return this.http.post(environment.url+"admin/role",role)
  }

  deleteRole(roleId:any):Observable<any>{
    return this.http.delete(environment.url+"admin/role/"+roleId)
  }

  getRoleByIdApi(roleId:any):Observable<any>{
    return this.http.get(environment.url+"admin/role/"+roleId)
  }
}
