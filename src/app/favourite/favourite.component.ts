import { Component, OnInit } from '@angular/core';
import { EmojiService } from '../shared/emoji.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  constructor(public emojiService: EmojiService) { }

  ngOnInit(): void {
  }

  delEmoji(id:number){
    this.emojiService.delEmoji(id)
  }
  onChange(id: number){
    this.emojiService.onToggle(id)
  }

}
