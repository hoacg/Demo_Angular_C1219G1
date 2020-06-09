import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-red-text',
  templateUrl: './red-text.component.html',
  styleUrls: ['./red-text.component.css']
})
export class RedTextComponent implements OnInit, OnDestroy, OnChanges {

  @Input('t') text: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    console.log('Đã thực hiện hàm ngOnInit()');

    this.messageService.getObservable().subscribe( result => {
      this.text = result;
    });
  }

  ngOnDestroy() {
    console.log('Đã thực hiện hàm ngOnDestroy()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Đã thực hiện hàm ngOnChanges()');
    console.log(changes);
  }

}
