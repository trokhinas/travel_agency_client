import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'api/users';

  constructor(private http: HttpClient) {}

  public getUser(id: number) {
    const path = this.buildPath(id);

    console.log('GET', path);
    return this.http.get<User>(path);
  }
  public getAllUsers() {
    const path = this.buildPath('all');

    console.log('GET', path);
    return this.http.get<[User]>(path);
  }
  public deleteUser(id: number) {
    const path = this.buildPath(id);

    console.log('DELETE', path);
    const result = this.http.delete<boolean>(path);
    console.log(result);

    return result;
  }
  public createUser(user: User) {
    const path = this.buildPath();

    console.log('POST', path);
    const result = this.http.post<boolean>(path, user);
    console.log(result);

    return result;
  }
  public updateUser(user: User) {
    const path = this.buildPath();

    console.log('PUT', path);
    const result = this.http.put<boolean>(path, user);
    console.log(result);

    return result;
  }

  private buildPath(element?: any | null) {
    const path = `${this.url}/`;
    if (element !== undefined) {
      return `${this.url}/${element}`;
    }
    return path;

  }
}
