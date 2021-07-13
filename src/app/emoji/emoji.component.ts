import { Component, OnInit } from '@angular/core';
import { EmojiService } from '../shared/emoji.service';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {

  public searchString ='';

  constructor(public emojiService: EmojiService) { }

  ngOnInit(): void {
    this.emojiService.fetchEmojis()
  }
  onChange(id: number){
    this.emojiService.onToggle(id)
  }

  delEmoji(id:number){
    this.emojiService.delEmoji(id)
  }


}

