import { Component, OnInit } from '@angular/core';
import { HeaderAbout } from '../header/model/header-info';
import { EmojiInterface } from '../model/emoji-interface';
import { EmojiService } from '../service/emoji.service';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {


  searchString ='';
  about = HeaderAbout;

  constructor(public emojiService: EmojiService) { }

  getList():EmojiInterface[]{
    return this.emojiService.getList().filter(el=>!el.del)
  }
  emojiList:EmojiInterface[] = [];

  ngOnInit(): void {
    this.emojiService.fetchEmojis()
    this.emojiList = this.getList()


  }
  starEmoji(id: number){
    this.emojiService.starEmoji(id)
  }

  delEmoji(id:number){
    this.emojiService.delEmoji(id)
    this.emojiList = this.getList()


  }


}

