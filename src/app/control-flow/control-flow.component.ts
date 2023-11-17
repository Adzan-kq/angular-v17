import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  value = true;
  listName: string[] = [];
  queryname = '';

  constructor() {
    console.log('🚀 ~ query data: ', this.queryname);
  }

  saveName() {
    if (this.queryname.trim() !== '') {
      this.listName.push(this.queryname);
      this.queryname = '';
    }
  }
}
