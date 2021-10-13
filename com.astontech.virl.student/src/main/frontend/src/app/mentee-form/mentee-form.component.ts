import { Component, OnInit } from '@angular/core';
import { Mentee } from '../types/mentee';

@Component({
  selector: 'app-mentee-form',
  templateUrl: './mentee-form.component.html',
  styleUrls: ['./mentee-form.component.css']
})
export class MenteeFormComponent {

  mentee = new Mentee('Levi Schwartzberg', 'MN', 'DEV');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.mentee); }

}
