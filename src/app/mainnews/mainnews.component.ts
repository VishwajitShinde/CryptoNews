import { Component, OnInit } from '@angular/core';
import { MainNewsManager } from '../model/MainNewsManager';

@Component({
  selector: 'app-mainnews',
  templateUrl: './mainnews.component.html',
  styleUrls: ['./mainnews.component.scss']
})
export class MainnewsComponent implements OnInit {
  private _newsManager: MainNewsManager;
  constructor() { }

  ngOnInit(): void {
    console.log(this.newsManager);
    this.newsManager = new MainNewsManager();
    console.log(this.newsManager);
  }
  public get newsManager(): MainNewsManager {
    return this._newsManager;
  }

  public set newsManager(value: MainNewsManager) {
		this._newsManager = value;
	}
}
