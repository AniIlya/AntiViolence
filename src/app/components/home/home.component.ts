import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { StoryCarouselComponent } from '../../story-carousel/story-carousel.component';
import { ChatbotComponent } from '../../chatbot/chatbot.component';
@Component({
  selector: 'app-home',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet, StoryCarouselComponent, ChatbotComponent, StoryCarouselComponent],
=======
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet, StoryCarouselComponent, ChatbotComponent],
>>>>>>> 1ab47832ad7d184866f5c2cd731c4ee4a9758971
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
