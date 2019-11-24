import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from './file-size/file-size.pipe';

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
        <ng-template myFor [myForOf]=mapped let-file let-i=index>
          <li>
            <p [innerHTML]=file.name></p>
            <p [innerHTML]="file.size"></p>
          </li>
        </ng-template>
      </ul>
    </div>
  `,
  providers: [
    FileSizePipe
  ]
})
export class AppComponent implements OnInit {
  files: File[];
  mapped: File[];

  constructor(private fileSizePipe: FileSizePipe) { }

  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'iamge/jpg' },
      { name: 'background.png', size: 1784562, type: 'image.png' }
    ];

    this.mapped = this.files.map(item => ({ ...item, size: this.fileSizePipe.transform(item.size, 'MB') }));
  }
}
