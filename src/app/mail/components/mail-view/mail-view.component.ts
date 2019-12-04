import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {
  reply = '';
  message$ = this.route.data.pipe(pluck('message'));

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.reply = '';
    });
  }

  updateReply(value: string) {
    this.reply = value;
  }

  sendReply() {
    console.log('Sent!', this.reply);
  }

}
