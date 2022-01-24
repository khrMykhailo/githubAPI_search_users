import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  avatar_url: string
  login: string
  type: string
  html_url: string
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class GitHabAPIService {

  users: User[]
  public loading = false
  public searchValue: string = ''

  constructor(
    private http: HttpClient
  ) {
  }

  getGithubUsers(name: string): Observable<User[]> {
    this.loading = true
    return this.http.get<any>(`https://api.github.com/search/users?q=${name}+in%3Afullname`)
      .pipe(
        map(item => item.items.slice(0, 20))
      )

  }

  getById(name: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${name}`)
  }

  clearAll() {
    this.users = null
    this.searchValue = ''
    this.loading = false
  }
}
