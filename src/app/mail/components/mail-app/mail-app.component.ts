import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mail-app',
  templateUrl: './mail-app.component.html',
  styleUrls: ['./mail-app.component.scss']
})
export class MailAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onActivate(data) {
    console.log('Activate', data);
  }

  onDeactivate(data) {
    console.log('Deactivate', data);
  }

}
