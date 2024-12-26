import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
<<<<<<< HEAD

import { ChatbotComponent } from './chatbot/chatbot.component';

import { HotLinesComponent } from './components/hot-lines/hot-lines.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { InteractiveGameComponent } from './components/interactive-game/interactive-game.component';
import { StoryCarouselComponent } from './story-carousel/story-carousel.component';
import { StoryComponent } from './story/story.component';

=======
<<<<<<< HEAD
import { ChatbotComponent } from './chatbot/chatbot.component';
=======
import { HotLinesComponent } from './components/hot-lines/hot-lines.component';
>>>>>>> 24ce7327bd5daf2ef51bf1c521a3b3b8c7b09c25
>>>>>>> 1ab47832ad7d184866f5c2cd731c4ee4a9758971

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent },
<<<<<<< HEAD

    { path: 'chatbot', component: ChatbotComponent },

    {path: 'hotLines', component: HotLinesComponent},

    {path: 'statistics', component: StatisticsComponent},
    {path: 'games', component: InteractiveGameComponent},
    {path: 'story', component: StoryComponent},

=======
<<<<<<< HEAD
    { path: 'chatbot', component: ChatbotComponent },
=======
    {path: 'hotLines', component: HotLinesComponent},
>>>>>>> 24ce7327bd5daf2ef51bf1c521a3b3b8c7b09c25
>>>>>>> 1ab47832ad7d184866f5c2cd731c4ee4a9758971
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];
