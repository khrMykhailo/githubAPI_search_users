import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { GitHabAPIService, User } from '../shared/servises/git-hab-api.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  displayedColumns: string[] = ['id', 'login', 'type', 'link'];
  dataSource: User[]

  constructor(
    public github: GitHabAPIService,
  ) { }

  ngOnInit() {
    this.dataSource = this.github.users

  }

  reload(event: Event) {
    setTimeout(() => {
      this.ngOnInit()

    }, 50)

  }

}
