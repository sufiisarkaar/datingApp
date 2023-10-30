import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chating-box',
  templateUrl: './chating-box.component.html',
  styleUrls: ['./chating-box.component.css']
})
export class ChatingBoxComponent implements OnInit {
  SendMessage:FormGroup;

  ChatArray:any = [];
  constructor(private FB:FormBuilder) {
    this.SendMessage = this.FB.group({
      msg : this.FB.control('',[Validators.required])
    })
   }

  ngOnInit(): void {
  }


  sendMessage(){
    let MSG = this.SendMessage.value;
    if(this.SendMessage.valid){
      this.ChatArray.push(MSG);
      this.SendMessage.reset();
    }

  }
}
