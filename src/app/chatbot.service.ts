
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'http://localhost:3000/ask';  // Адрес сервера

  constructor(private http: HttpClient) { }

  sendMessageToBot(userMessage: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { userMessage });
  }
}
