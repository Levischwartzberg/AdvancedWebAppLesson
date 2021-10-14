import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Mentee } from '../types/mentee';

@Component({
  selector: 'app-mentee-form',
  templateUrl: './mentee-form.component.html',
  styleUrls: ['./mentee-form.component.css']
})
export class MenteeFormComponent implements OnChanges {

  mentee = new Mentee('Levi Schwartzberg', 'MN', 'DEV');
  @Input() savePressed: boolean = false;

  submitted = false;

  onSubmit() { this.submitted = true; }

  @Output() notify: EventEmitter<Mentee> = new EventEmitter<Mentee>();

  ngOnChanges() {
    if (this.savePressed === true) {
      this.notifyParent();
      this.savePressed = false;
    }
  }

  notifyParent() {
    this.notify.emit(this.mentee);
  }

  get diagnostic() { return JSON.stringify(this.mentee); }

}
