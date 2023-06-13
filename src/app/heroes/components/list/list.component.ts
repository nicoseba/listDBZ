import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = ['ironman', 'spiderman', 'hulk', 'thor'];
  public deletedHero?: string;
  public deleteHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
