import { Pipe, PipeTransform } from "@angular/core";
import { EmojiInterface } from './emoji.service';


@Pipe({
  name: 'emojiSearch'
})
export class EmojiSearchpipe implements PipeTransform{
  transform(emojiList: EmojiInterface[], search:string = ""):EmojiInterface[]{
    if (!search.trim()){
      return emojiList
    }

    return emojiList.filter(emoji=>{
      return emoji.name.toLowerCase().indexOf(search.toLowerCase()) != -1
    })

  }
}
