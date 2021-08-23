import { Component, OnInit } from '@angular/core';
import { EmojiInterface } from '../model/emoji-interface';
import { EmojiService } from '../service/emoji.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  constructor(public emojiService: EmojiService) { }

  getList():EmojiInterface[]{
    return this.emojiService.getList().filter(el=>el.star)
  }
  emojiList:EmojiInterface[] = [];

  ngOnInit(): void {
    this.emojiList = this.getList().filter(el=>!el.del)
    // this.emojiService.fetchEmojis()
  }

  delEmoji(id:number){
    this.emojiService.delEmoji(id)
    this.emojiList = this.getList().filter(el=>!el.del)

  }
  starEmoji(id: number){
    this.emojiService.starEmoji(id)
    this.emojiList = this.getList().filter(el=>el.star)

  }

}
