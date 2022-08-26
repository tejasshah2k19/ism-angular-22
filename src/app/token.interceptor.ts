import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

//filter -> request -> filter -> controller
//api --> request -> interceptor -> server
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   console.log("token interceptor....")
  //   let authToken = "1234567890123456"
  //   // const modifiedReq = request.clone({headers:request.headers.set("authToken",authToken)})    
  //   // console.log(modifiedReq.headers);
  //   if(request.method == "post"){

  //   }
  //   console.log(request.method);

  //  return next.handle(request.clone({ setHeaders: { authToken } })); // go forward with header  
  //   // return next.handle(request);
  // }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authToken = localStorage.getItem("authToken") as string

    // if (request.method.toLowerCase() == "post") {
    //   console.log("post");
    //   let headers1 = new HttpHeaders({ "authToken": authToken })
    //   let req = request.clone({ headers: headers1 })
    //   return next.handle(req)
    // } else {
    //   console.log(request.method);
    //   return next.handle(request.clone({ setHeaders: { authToken } })); // go forward with header  
   
    // }
    return next.handle(request.clone({ setHeaders: { authToken } })); // go forward with header  
   
  }
}
