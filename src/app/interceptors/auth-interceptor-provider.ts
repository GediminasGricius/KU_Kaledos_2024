import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { authInterceptor } from "./auth-interceptor.interceptor";

export const authInterceptorProvider:Provider={
    provide: HTTP_INTERCEPTORS,
    useClass: authInterceptor,
    multi:true
}