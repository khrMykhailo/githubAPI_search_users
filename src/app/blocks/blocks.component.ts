import { Component, OnInit } from '@angular/core';
import { GitHabAPIService } from '../shared/servises/git-hab-api.service';



@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {


  constructor(
    public github: GitHabAPIService
  ) { }

  ngOnInit() {
  }



}
