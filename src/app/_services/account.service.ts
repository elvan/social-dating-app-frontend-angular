import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<any>(this.baseUrl + 'account/login', model).pipe(
      map((response: any) => {
        console.log(response);
      })
    );
  }
}
