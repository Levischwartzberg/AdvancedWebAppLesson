import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenteeService } from '../services/mentee.service';
import { Mentee } from '../types/mentee';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  mentees: Mentee[] = [];
  newMenteeModal = false;
  errorModal = false;
  saveMenteeControl = false;
  menteeSavedModal = false;

  menteeFromForm: Mentee = new Mentee("Name", "Site", "BU");

  // constructor(private http: HttpClient) { }

  constructor(private menteeService: MenteeService, private http: HttpClient) {} 

  ngOnInit(): void {
    this.getMentees();
  }

  getMentees() {
    this.menteeService.getMentees().subscribe(mentees => {
        this.mentees = mentees;
    })
  }

  saveMentee() {
    console.log("Whep!");
    this.saveMenteeControl = true;
    this.newMenteeModal = false;
    this.menteeSavedModal = true;
    this.getMentees();
  }

  refreshPage() {
    window.location.reload();
  }

  onNotify(message: Mentee): void {
    this.menteeFromForm = message;
    this.http.post<Mentee>("/api/mentee/", this.menteeFromForm)
      .subscribe(data => {this.menteeFromForm.name = data.name});
  }

}
