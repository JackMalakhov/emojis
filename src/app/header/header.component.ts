import { KeyValue } from '@angular/common';
import { Component,  ElementRef,  OnInit} from '@angular/core';
import { EmojiService } from '../service/emoji.service';
import { HeaderAbout, HeaderLinks } from './model/header-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appTitle = "EMOJIS-APP";
  cBlack= 'white';
  themeMode = "Dark Mode";
  links = HeaderLinks;
  public originalOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): number => {
    return 0;}


  changeTheme(){
    this.themeMode = (this.themeMode=="Dark Mode") ? "Light Mode" : "Dark Mode"
    console.log()

  }

  constructor(public emojiService: EmojiService
  ) { }

  ngOnInit(): void {
  }

  link = '/';
  setLink(item:string):string{
    return this.link = item;
  }
  isLink(item:string):boolean{
    return this.link===item;
  }

  }


