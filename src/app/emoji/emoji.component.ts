import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmojiService } from '../shared/emoji.service';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {

  constructor(public emojiService: EmojiService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.emojiService.fetchEmojis()
  }
  onChange(id: number){
    // this.onToggle.emit(id)
    this.emojiService.onToggle(id)
  }

  delEmoji(id:number){
    this.emojiService.delEmoji(id)
  }


}

