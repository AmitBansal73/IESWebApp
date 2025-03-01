import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("Token");
  debugger
  const clonedRequest = token? req.clone( {
    setHeaders:{ 
      Authorization : `Bearer ${token}`
    } 
}): req
debugger
  return next(clonedRequest);
};
