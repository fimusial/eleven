import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import * as aos from 'aos';
import { filter } from 'rxjs';

@Component({
  selector: 'eleven-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title = 'eleven';

  constructor(
    private router: Router,
    private titleService: Title) { }

  ngOnInit(): void {
    aos.init();

    this.router.events.pipe(
      filter(x => x instanceof NavigationEnd)
    ).subscribe(x => {
      this.titleService.setTitle('Eleven');
    })
  }
}
