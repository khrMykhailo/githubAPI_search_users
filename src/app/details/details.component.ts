import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GitHabAPIService, User } from '../shared/servises/git-hab-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public $userDetails: Observable<User>

  constructor(
    public github: GitHabAPIService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.$userDetails = this.route.params
      .pipe(
        switchMap((par: Params) => {
          return this.github.getById(par['name'])
        })
      )

  }

}
