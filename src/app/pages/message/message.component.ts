import { Component, Input, inject } from '@angular/core';
import { MessageService } from '../../shared/services/message/message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() message: string | null = null;
  private messageService: MessageService = inject(MessageService);


  dismiss(): void {
    this.messageService.setMessage(null);
  }

}
