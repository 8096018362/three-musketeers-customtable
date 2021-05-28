import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public clearSession() {
    window.sessionStorage.clear();
  }

  set customerId(value: string) {
    window.sessionStorage.setItem('customerId', value);
  }

  get customerId(): string {
    return window.sessionStorage.getItem('customerId');
  }
}
