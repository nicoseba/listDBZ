import { Component } from '@angular/core';

@Component({
  template: `<h3>Counter: {{ count }}</h3>
    <button (click)="increseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increseBy(+1)">+1</button> `,
  selector: 'app-counter',
})
export class CounterComponent {
  public count: number = 10;

  increseBy(value: number): void {
    this.count += value;
  }

  reset(): void {
    this.count = 10;
  }
}
