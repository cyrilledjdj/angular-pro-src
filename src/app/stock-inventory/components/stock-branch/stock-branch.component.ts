import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.scss']
})
export class StockBranchComponent implements OnInit {

  @Input()
  parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  required(section): boolean {
    return this.parent.get(section).hasError('required') &&
      this.parent.get(section).touched;
  }

  get invalid() {
    return (
      this.parent.get('store.branch').hasError('invalidBranch') &&
      this.parent.get('store.branch').dirty &&
      !this.required('store.branch')
    );
  }

  get unknown() {
    return (
      this.parent.get('store.branch').hasError('unknownBranch') &&
      this.parent.get('store.branch').dirty
    );
  }

}
