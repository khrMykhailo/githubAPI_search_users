import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GitHabAPIService, User } from '../shared/servises/git-hab-api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() eventSearch: EventEmitter<User[]> = new EventEmitter<User[]>()

  form: FormGroup
  search: Subscription


  constructor(
    public github: GitHabAPIService
  ) { }



  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl(this.github.searchValue, Validators.required)
    })
  }

  getUsers() {

    this.github.searchValue = this.form.value.search

    this.github.users = null

    this.github.getGithubUsers(this.form.value.search)
      .subscribe(data => {
        this.github.users = data
        this.eventSearch.emit(data)
      })



  }

  ngOnDestroy(): void {
    if (this.search) {
      this.search.unsubscribe()
    }
  }

}
