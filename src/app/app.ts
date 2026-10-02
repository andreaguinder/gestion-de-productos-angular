import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('gestion-de-productos');
  private platformId = inject(PLATFORM_ID);

  constructor(private router: Router) {}

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const ultimaRuta = localStorage.getItem('ultimaRuta');
      if (ultimaRuta && ultimaRuta !== '/') {
        this.router.navigateByUrl(ultimaRuta);
      }

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        if (event.urlAfterRedirects !== '/') {
          localStorage.setItem('ultimaRuta', event.urlAfterRedirects);
        }
      });
    }
  }
}