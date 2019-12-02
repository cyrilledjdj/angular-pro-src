import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from './models/mail';

const MESSAGES_API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  getFolder(folder: string): Observable<Mail[]> {
    return this.http.get<Mail[]>(`${MESSAGES_API}/messages`, {
      responseType: 'json',
      params: {
        folder
      }
    });
  }

}
