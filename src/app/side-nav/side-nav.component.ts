import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})

export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fas fa-home',
    },
    {
      number: '2',
      name: 'About',
      icon: 'fas fa-circle-info',
    },
    {
      number: '3',
      name: 'Contact',
      icon: 'fas fa-phone',
    },
    {
      number: '4',
      name: 'Help',
      icon: 'fas fa-question',
    },
    {
      number: '5',
      name: 'Settings',
      icon: 'fas fa-cog',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
