import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = "angular emojis app"
  userName: string = "";
  response: any;

  constructor(
    private http: HttpClient
  ) { }

  listOfEmojis: any=[];
  i = 0;

  search(){
    this.http.get('https://api.github.com/emojis')
    .subscribe((response)=>{
      this.response = response;
      for (let item in this.response){
        this.listOfEmojis[this.i] = {
          "name": item,
          "href": this.response[item],
          "star": false,
          "del": false
        }
        this.i+=1;
      }



    })
  }
  ngOnInit(): void {

  }


}
