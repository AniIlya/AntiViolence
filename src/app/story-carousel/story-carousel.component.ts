import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
import { EducationComponent } from '../components/education/education.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { RouterLink } from '@angular/router';
=======
>>>>>>> 1ab47832ad7d184866f5c2cd731c4ee4a9758971

@Component({
  selector: 'app-story-carousel',
  standalone: true,
  imports: [ MatButtonModule,
<<<<<<< HEAD
    MatIconModule, EducationComponent, ChatbotComponent, RouterLink],
=======
    MatIconModule,],
>>>>>>> 1ab47832ad7d184866f5c2cd731c4ee4a9758971
  templateUrl: './story-carousel.component.html',
  styleUrl: './story-carousel.component.scss'
})
export class StoryCarouselComponent {
  stories = [
    {   video: '../../assets/home2.png', // Путь к видео для второго слайда
     
      title: 'Личное общение и анонимность',
<<<<<<< HEAD
      description: 'Беседуйте с чат-ботом анонимно. Простой и безопасный способ обратиться за поддержкой.',
      link: "chatbot"
=======
      description: 'Беседуйте с чат-ботом анонимно. Простой и безопасный способ обратиться за поддержкой.'
>>>>>>> 1ab47832ad7d184866f5c2cd731c4ee4a9758971
    },
    {
    video: '../../assets/home1.jpg',  // Путь к видео для первого слайда
      title: 'Играй и учись: улучшай свои знания с нами!',
<<<<<<< HEAD
      description: 'Наши образовательные игры помогут тебе лучше понять важные темы, связанные с гендерным равенством и правами человека. Играй и развивайся!',
      link: "education"
=======
      description: 'Наши образовательные игры помогут тебе лучше понять важные темы, связанные с гендерным равенством и правами человека. Играй и развивайся!'
>>>>>>> 1ab47832ad7d184866f5c2cd731c4ee4a9758971
    },
    // Добавьте другие истории с видео
  ];

  currentIndex: number = 0;

  ngOnInit(): void {
    // Запускаем автоматическую прокрутку
    setInterval(() => {
      this.nextStory();
    }, 15000); // 15 секунд
  }

  // Переключение на следующую историю
  nextStory() {
    this.currentIndex = (this.currentIndex + 1) % this.stories.length;
  }

  // Переключение на предыдущую историю
  prevStory() {
    this.currentIndex = (this.currentIndex - 1 + this.stories.length) % this.stories.length;
  }
}



