import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'eleven-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public awayFromTop = false;

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToTop(): void {
    window.scroll({ 
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', ['$event']) public windowOnScroll(event: Event): void {
    const document = event.target as Document;
    const scrollTop = document?.scrollingElement?.scrollTop;
    if (scrollTop && scrollTop >= 300) {
      this.awayFromTop = true;
    } else {
      this.awayFromTop = false;
    }
  }
}
