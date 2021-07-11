import { Component,  OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmojiService } from '../shared/emoji.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {
    // this._http: get()
  }


  }


