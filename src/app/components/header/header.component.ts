import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 // Хранение состояний меню
 activeMenu: string | null = null;

 // Метод для переключения меню
 toggleMenu(menu: string) {
   if (this.activeMenu === menu) {
     this.activeMenu = null; // Если клик по открытому меню, закрываем
   } else {
     this.activeMenu = menu; // Иначе открываем выбранное меню
   }
 }

 // Метод для закрытия всех меню
 closeAllMenus() {
   this.activeMenu = null;
 }
 @HostListener('document:click', ['$event'])
 handleOutsideClick(event: Event) {
   const target = event.target as HTMLElement;
   if (!target.closest('.dropdown')) {
     this.closeAllMenus(); // Закрываем все меню, если клик вне области
   }
 }
}
