import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
* Это одна большая заглушка, пока не будет нормальной аутентификации.
* */

export class GlobalDataService {
  private currentUserId = 1;
  private logged = true;

  constructor() { }

  public getUserId(): number {
    return this.currentUserId;
  }
  public isLogIn(): boolean {
    return this.logged;
  }
}
