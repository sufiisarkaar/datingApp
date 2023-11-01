import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chating-box',
  templateUrl: './chating-box.component.html',
  styleUrls: ['./chating-box.component.css']
})
export class ChatingBoxComponent implements OnInit {
  SendMessage:FormGroup;
  
  userInput: string = '';
  reply: string[] = [];
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
      if(MSG.msg === "hi") {
        this.reply.push("hii");
      } else if(MSG.msg == "how r u?") {
        this.reply.push("fine..! and you?");
      } else if(MSG.msg == "fine") {
        this.reply.push("good");
      } else if(MSG.msg == "Hi") {
        this.reply.push("hi");
      } else if(MSG.msg == "How Are You") {
        this.reply.push("fine..! and you?");
      } else if(MSG.msg == "Fine") {
        this.reply.push("good");
      } else if(MSG.msg == "Where Are You From?") {
        this.reply.push("India");
      } else if(MSG.msg == "where r u from?") {
        this.reply.push("INDIA");
      } else if(MSG.msg == "What are doing?") {
        this.reply.push("nothing");
      } else  {
        this.reply.push("Sorry i can`t understand... ");
      }
      this.SendMessage.reset();
    }

  }


  
  
}
