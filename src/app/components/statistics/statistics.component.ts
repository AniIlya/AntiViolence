import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {


  ngAfterViewInit(): void {
    this.createPieChart();
    this.createBarChart();
  }

  createPieChart(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('pieChart');
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      const data = [18.3, 1.4]; // Пример данных для женщин и мужчин
      const labels = ['Женщины (18.3%)', 'Мужчины (1.4%)'];
    
      let startAngle = 0;
      const total = data.reduce((a, b) => a + b, 0);
      const colors = ['#FF5733', '#C70039'];
    
      // Рисуем сектора
      data.forEach((value, index) => {
        const sliceAngle = (value / total) * (Math.PI * 2);
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 150, startAngle, startAngle + sliceAngle);
        ctx.fillStyle = colors[index];
        ctx.fill();
        startAngle += sliceAngle;
      });
    
      // Добавляем подписи
      startAngle = 0;
      data.forEach((value, index) => {
        const sliceAngle = (value / total) * (Math.PI * 2);
        const middleAngle = startAngle + sliceAngle / 2;
        const x = 200 + Math.cos(middleAngle) * 100;
        const y = 200 + Math.sin(middleAngle) * 100;
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.fillText(labels[index], x, y);
        startAngle += sliceAngle;
      });
    }
  }

  createBarChart(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('barChart');
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      const labels = ['Репорты из знакомых', 'Репорты из незнакомцев'];
      const data = [52.4, 15.1];
      const barWidth = 100;
      const barSpacing = 20;
      const maxHeight = 300;

      // Настройка осей и подписи
      ctx.fillStyle = '#000';
      ctx.font = '14px Arial';
      ctx.textAlign = 'center';
      labels.forEach((label, index) => {
        ctx.fillText(label, (barWidth + barSpacing) * index + barWidth / 2, 380);
      });

      // Рисуем столбцы
      data.forEach((value, index) => {
        const barHeight = (value / 100) * maxHeight;
        ctx.fillStyle = '#FF5733';
        ctx.fillRect((barWidth + barSpacing) * index, 380 - barHeight, barWidth, barHeight);
      });
    }
  }
}
