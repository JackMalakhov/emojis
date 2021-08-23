import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { EmojiInterface } from "../model/emoji-interface";

@Injectable({providedIn: 'root'})

export class EmojiService {
  responce: any;
  emojiList: EmojiInterface[] =[]
  searchString ='';
  appTitle = "EMOJIS-APP"

  constructor(
    private http: HttpClient
    ){}

  fetchEmojis(){
    if (localStorage.length===NaN){
      let i = 0;
      this.http.get('https://api.github.com/emojis' )
        .subscribe((responce)=>{
          this.responce = responce;
          for (let item in this.responce){
          this.emojiList[i]={
            id: i,
            name: item,
            href: this.responce[item],
            star: false,
            del: false
          }
          localStorage.setItem(i.toString(), JSON.stringify(this.emojiList[i]))

          i+=1;
        }
      })

    } else{
      for (let i =0; i<localStorage.length; i++){
        let item = JSON.parse(localStorage.getItem(i.toString())!)
        this.emojiList[i] ={
          id: item.id,
          name: item.name,
          href: item.href,
          star: item.star,
          del: item.del
        }
      }
    }
  }

  action(id:number, entity:string){
    const idx = this.emojiList.findIndex(t=>t.id===id);
    this.emojiList[idx].star = !this.emojiList[idx].star;


  }

  getList():EmojiInterface[]{
    return this.emojiList;
  }

  starEmoji(id: number){
    const idx = this.emojiList.findIndex(t=>t.id===id)
    this.emojiList[idx].star = !this.emojiList[idx].star;
    const star = JSON.parse(localStorage.getItem(id.toString())!)
    star.star = !star.star
    localStorage.setItem(id.toString(), JSON.stringify(star))
}
  delEmoji(id: number){
    const idx = this.emojiList.findIndex(t=>t.id===id)
    this.emojiList[idx].del = !this.emojiList[idx].del
    const del = JSON.parse(localStorage.getItem(id.toString())!)
    del.del = !del.del
    localStorage.setItem(id.toString(), JSON.stringify(del))
  }
}
