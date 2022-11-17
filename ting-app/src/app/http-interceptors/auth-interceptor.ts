import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, tap } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private toastr: ToastrService, private route: Router) { }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

            console.log("INTERCEPTOR", req.url);
        const idToken = localStorage.getItem("id_token");
        const whiteListURL = [
            "http://localhost:3000/api/login",
            "http://localhost:3000/api/home",
        ];
        if (idToken && !whiteListURL.includes(req.url)) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",idToken)});

            return next.handle(cloned).pipe(catchError(err => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        localStorage.removeItem("id_token");
                        localStorage.removeItem("expires_at");
                        this.toastr.error("Error 401 - Unauthorized: Sesion expirada")
                        .onHidden.subscribe(() => {
                            this.route.navigate(["/login"]);
                        });
                    }
                }
                throw err;
            }));
        }
        else {
            return next.handle(req);
        }
    }
}