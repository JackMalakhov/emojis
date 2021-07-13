import { Component, OnInit } from '@angular/core';
import { EmojiService } from '../shared/emoji.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent implements OnInit {

  constructor(public emojiService: EmojiService) { }

  ngOnInit(): void {
  }
  delEmoji(id:number){
    this.emojiService.delEmoji(id)
  }
}
