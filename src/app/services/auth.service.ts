import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public login(email: String, password: String): Observable<any> {
    const response = {
      token: 'faketoken',
      user: {
        nickname: `Human ${email}`,
        email,
        password
      }
    };

    return of(response).pipe(delay(3000), tap((x) => {
      localStorage.setItem('session', JSON.stringify(x));
    }));
  }

  public session(): Observable<any> {
    return of(localStorage.getItem('session')).pipe(map((x) => {
      return x ? JSON.parse(x) : {};
    }));
  }

  public check(): Observable<boolean> {
    return of(localStorage.getItem('session')).pipe(
      map((x) => (x ? JSON.parse(x) : {})),
      map(x => !!x.token)
    );
  }

  public logout(): Observable<any> {
    return of().pipe(delay(300), tap(() => {
      this.router.navigateByUrl('/auth/login');
      localStorage.removeItem('session');
    }));
  }

}
