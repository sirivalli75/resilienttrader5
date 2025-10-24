import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  slogans: string[] = [];
  currentIndex = 0;
  currentSlogan = '';

  constructor(private translate: TranslateService) {
    this.translate.use('en');
    this.loadSlogans();

    // Rotate slogans every 4 seconds
    setInterval(() => {
      if (this.slogans.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.slogans.length;
        this.currentSlogan = this.slogans[this.currentIndex];
      }
    }, 4000);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang).subscribe(() => {
      // Reload slogans after language switch
      this.loadSlogans();
    });
  }

  private loadSlogans() {
    this.translate.get('SLOGANS').subscribe((res: string[]) => {
      this.slogans = res;
      if (this.slogans.length > 0) {
        this.currentSlogan = this.slogans[0];
      }
    });
  }
}
