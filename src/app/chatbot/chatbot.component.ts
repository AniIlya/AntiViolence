import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';  // Импортируем HttpClient
import { Observable } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgFor, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  userMessage: string = '';
  messages: Array<{ text: string, sender: string }> = [];

  constructor(private http: HttpClient) {}

  sendMessage(): void {
    if (this.userMessage.trim()) {
      this.messages.push({ text: this.userMessage, sender: 'user' });

      // Отправка сообщения на сервер
      this.http.post<any>('http://localhost:3000/ask', { userMessage: this.userMessage }).subscribe(
        (response) => {
          // Обрабатываем успешный ответ
          this.messages.push({ text: response.message, sender: 'bot' });
        },
        (error) => {
          // Логирование ошибки и информирование пользователя
          console.error('Ошибка при запросе:', error);
          this.messages.push({ text: 'Извините, произошла ошибка. Попробуйте позже.', sender: 'bot' });
        }
      );

      this.userMessage = '';  // Очищаем поле ввода
    }
  }
}
