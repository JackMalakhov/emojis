import { Component } from '@angular/core';
import { EmojiService } from './shared/emoji.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public emojiService: EmojiService
    ) { }

  ngOnInit(): void { this.emojiService.fetchEmojis()}
}
