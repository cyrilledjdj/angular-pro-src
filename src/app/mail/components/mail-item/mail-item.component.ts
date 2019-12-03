import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../../models/mail';
import { Router } from '@angular/router';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss']
})
export class MailItemComponent implements OnInit {
  @Input()
  message: Mail;
  activate = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToMessage() {
    this.router.navigate(
      ['', { outlets: { pane: ['message', this.message.id] } }]
    );
  }

}
