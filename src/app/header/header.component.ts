import { Component,  OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmojiService } from '../shared/emoji.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appTitle = "EMOJIS-APP"

  constructor(public emojiService: EmojiService
  ) { }

  ngOnInit(): void {
  }

  showEmojis(){
    this.emojiService.showEmojis()
  }

  showFavourite(){
    this.emojiService.showFavourite()
  }

  showDeleted(){
    this.emojiService.showDeleted()
  }


  }


