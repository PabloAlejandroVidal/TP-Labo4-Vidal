import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MessageComponent } from '../message/message.component';
import { MessageService } from '../../shared/services/message/message.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MessageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  private messageService = inject(MessageService);
  public get message (): string | null { return this.messageService.message(); }
}
