import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-blue-text',
  templateUrl: './blue-text.component.html',
  styleUrls: ['./blue-text.component.css']
})
export class BlueTextComponent implements OnInit {
  @Input() text2 = 'mặc định';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage(msg: string) {
    this.messageService.send(msg);
  }

}
