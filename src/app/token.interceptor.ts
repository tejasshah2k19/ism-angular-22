import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//filter -> request -> filter -> controller
//api --> request -> interceptor -> server
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

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

    console.log("HTTP METHOD : => ");
    console.log(request.method)
    //header 

    //body 
    if (request.method.toLowerCase() == "post") { // 

      console.log("yes we are in post request");
      if (request.body instanceof FormData) {
        console.log("AuthToken Added in Body")
        request = request.clone({
          body: request.body.append("authToken", authToken)
        })
      } else {
        console.log(typeof(request.body));
        console.log(request.body);

        // let body = request.body
        // return next.handle(request.clone({
        //   setHeaders:{authToken} 
        //   ,body:{body,"authToken":authToken}
        // }))

         // let body = request.body
        // body["authToken"] = authToken

      }

    }

    console.log("auth Token interceptor.....")
    return next.handle(request.clone({ setHeaders: { authToken } })); // go forward with header  


  }
}
