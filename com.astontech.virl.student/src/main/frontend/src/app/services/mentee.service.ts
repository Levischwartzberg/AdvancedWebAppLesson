import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {Mentee} from '../types/mentee';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-secure-token'
  })
}

@Injectable()
export class MenteeService {
  menteeUrl = '/api/mentee/';

  constructor(private http: HttpClient) {
  }

  getMentees(): Observable<Mentee[]> {
    return this.http.get<Mentee[]>(this.menteeUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  addMentee(mentee: Mentee): Observable<Mentee> {
    return this.http.post<Mentee>(this.menteeUrl, mentee, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateMentee(mentee: Mentee): Observable<Mentee> {
    return this.http.put<Mentee>(this.menteeUrl, mentee, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteMentee(id: string): Observable<{}> {
    const url = `${this.menteeUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured: ', error.error.message);
    } else {
      console.error(
        `Backend Returned Code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; Please try again later.'
    );
  }


}
