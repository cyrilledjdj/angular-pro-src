import { Component, OnInit } from '@angular/core';
import { Mail } from '../../models/mail';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.scss']
})
export class MailFolderComponent implements OnInit {
  messages$: Observable<Mail[]> = this.route.data.pipe(pluck('messages'));
  title$: Observable<string> = this.route.params.pipe(pluck('name'));
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
