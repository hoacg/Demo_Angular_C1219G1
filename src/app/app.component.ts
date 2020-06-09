import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ứng dụng Demo lớp C1219G1!';
  isShow = true;

  strArray = [
    'Ví dụ thứ 1',
    'Ví dụ thứ 2',
    'Ví dụ thứ 3',
    'Ví dụ thứ 4',
    'Ví dụ thứ 5',
    'Ví dụ thứ 6',
  ];

  changeTitle() {
    this.title = 'Giá trị mới của title';
  }

  toggle() {
    this.isShow = !this.isShow;
  }

  doTimeout(e) {
    this.title = e;
  }

  // doSearch(val: HTMLElement) {
  //   this.strArray.push(val['value']);
  // }
}
