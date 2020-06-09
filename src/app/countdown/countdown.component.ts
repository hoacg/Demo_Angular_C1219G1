import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  _seconds = 10;

  @Input()
  get seconds() {
    return this._seconds;
  }
  set seconds(value: number) {
    const num = Number(value);
    if (isNaN(num)) {
      this._seconds = 10;
    } else {
      this._seconds = num;
    }
  }

  @Output() timeoff = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  startCountdown() {
    setInterval( () => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.timeoff.emit('Hết giờ');
      }
    } , 1000);
  }

}
