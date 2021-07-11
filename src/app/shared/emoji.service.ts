import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export interface EmojiInterface{
  id: number,
  name: string
  href: string
  star: boolean
  del: boolean
}


@Injectable({providedIn: 'root'})
export class EmojiService {
  public emojiList: EmojiInterface[] =[]
  responce: any;
  constructor(private http: HttpClient){}
  fetchEmojis(){
    let i = 0;
    this.http.get('https://api.github.com/emojis' )
      .subscribe((responce)=>{
        this.responce = responce;

        for (let item in this.responce){
        this.emojiList[i]={
          "id": i,
          "name": item,
          "href": this.responce[item],
          "star": false,
          "del": false
        }
        console.log(this.emojiList[i]);
        i+=1;
      }
    })
  }


  onToggle(id: number){
    const idx = this.emojiList.findIndex(t=>t.id===id)
    this.emojiList[idx].star = !this.emojiList[idx].star
}
  delEmoji(id: number){
    const idx = this.emojiList.findIndex(t=>t.id===id)
    this.emojiList[idx].del = !this.emojiList[idx].del
  }
}
