import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() public charactersList: Character[] = [];
  @Output() public onDeleted: EventEmitter<string> = new EventEmitter();
  // onDelete = indez value | number

  // onDeleteCharacter(index: number): void {
  //   this.onDeleted.emit(index);
  // }
  onDeleteCharacter(index: string): void {
    this.onDeleted.emit(index);
  }

}
