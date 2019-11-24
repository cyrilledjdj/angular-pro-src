import { Component, OnInit } from '@angular/core';

interface File {
  name: string;
  size: number;
  type: string;
}


@Component({
  selector: 'app-root',
  template: /* html */`
    <div>
      <ul>
        <ng-template myFor [myForOf]=files let-file let-i=index>
          <li>
            <p [innerHTML]=file.name></p>
            <p [innerHTML]="(file.size | fileSize)"></p>
          </li>
        </ng-template>
      </ul>
    </div>
  `
})
export class AppComponent implements OnInit {
  files: File[];

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'iamge/jpg' },
      { name: 'background.png', size: 1784562, type: 'image.png' }
    ];
  }
}
