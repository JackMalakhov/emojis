import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';



export interface EmojiInterface{
  id: number,
  name: string
  href: string
  star: boolean
  del: boolean
}


@Injectable({providedIn: 'root'})
export class EmojiService {
  responce: any;
  public emojiList: EmojiInterface[] =[]

  public emojiShown = true;
  public favouriteShown = false;
  public deletedShown = false;

  public appTitle = "EMOJIS-APP"

  constructor(private http: HttpClient){}

  public searchString ='';

  showEmojis(){
    this.emojiShown = true;
    this.favouriteShown = false;
    this.deletedShown = false;
    this.appTitle = "EMOJIS-APP"
  }

  showFavourite(){
    this.emojiShown = false;
    this.favouriteShown = true;
    this.deletedShown = false;
    this.appTitle = "EMOJIS-APP | favourite"
  }

  showDeleted(){
    this.emojiShown = false;
    this.favouriteShown = false;
    this.deletedShown = true;
    this.appTitle = "EMOJIS-APP | deleted"
  }



  fetchEmojis(){
    if (localStorage.length==0){
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
          localStorage.setItem(i.toString(), JSON.stringify(this.emojiList[i]))
          // console.log(JSON.parse(localStorage.getItem(i.toString())!))
          i+=1;
        }
        // const item1 = localStorage.getItem("1");

      })
    } else{
      for (let i =0; i<localStorage.length; i++){
        let item = JSON.parse(localStorage.getItem(i.toString())!)
        this.emojiList[i] ={
          "id": i,
          "name": item.name,
          "href": item.href,
          "star": item.star,
          "del": item.del
        }
      }

    }


  }


  onToggle(id: number){
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
