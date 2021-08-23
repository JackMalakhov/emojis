import { Component, OnInit } from '@angular/core';
import { EmojiService } from '../service/emoji.service';
import { EmojiInterface } from './../model/emoji-interface';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent implements OnInit {

  constructor(public emojiService: EmojiService) { }


  getList():EmojiInterface[]{
    return this.emojiService.getList().filter(el=>el.del)
  }
  emojiList:EmojiInterface[] = [];

  ngOnInit(): void {
    this.emojiList = this.getList()

    // this.emojiService.fetchEmojis()
  }


  delEmoji(id:number){
    this.emojiService.delEmoji(id)
    this.emojiList = this.getList()

  }
}
