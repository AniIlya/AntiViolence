import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';


interface Question {
  text: string;
  options: string[];
  correctOptionIndex: number;  // Индекс правильного ответа для оценки
}

@Component({
  selector: 'app-interactive-game',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './interactive-game.component.html',
  styleUrl: './interactive-game.component.scss'
})
export class InteractiveGameComponent {
  questions: Question[] = [
    {
      text: 'Ваше личное пространство и границы были нарушены. Ваша реакция?',
      options: ['Посмеяться', 'Вежливо попросить перестать', 'Озлобиться и наорать'],
      correctOptionIndex: 1,  // Ответ "Вежливо попросить перестать" считается правильным
    },
    {
      text: 'Кто-то неудачно пошутил над вами?',
      options: ['Громко посмеяться', 'Сказать что тебе некомфортно', 'Проигнорировать'],
      correctOptionIndex: 1,  // Ответ "Сказать что тебе некомфортно" считается правильным
    },
    {
      text: 'Кто-то нарушил ваши личные границы в общественном месте?',
      options: ['Проигнорировать ситуацию', 'Сказать громко, что мне некомфортно', 'Остаться спокойным и сделать шаг назад'],
      correctOptionIndex: 2,  // Ответ "Остаться спокойным и сделать шаг назад" считается правильным
    }
    // Добавьте другие вопросы по аналогии
  ];
  

  currentQuestionIndex: number = 0;
  score: number = 0;
  showResultsFlag: boolean = false;
  feedback: string = '';

  answerQuestion(selectedOptionIndex: number): void {
    if (selectedOptionIndex === this.questions[this.currentQuestionIndex].correctOptionIndex) {
      this.score++;
    }
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResults();
    }
  }

  showResults(): void {
    this.showResultsFlag = true;
    if (this.score === this.questions.length) {
      this.feedback = 'Отлично! Вы четко знаете свои границы.';
    } else if (this.score >= this.questions.length / 2) {
      this.feedback = 'Хорошая работа! Ты знаешь как правильно отреагировать';
    } else {
      this.feedback = 'Попробуем больше узнать о границах вместе.';
    }
  }

  resetGame(): void {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.showResultsFlag = false;
    this.feedback = '';
  }
  
}
  


