import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMentees();
  }

  getMentees() {
    this.http.get<Mentee[]>("/api/mentee/").subscribe(mentees => {
        this.mentees = mentees;
    })
  }

  saveMentee() {
    console.log("Whep!")
  }

}
