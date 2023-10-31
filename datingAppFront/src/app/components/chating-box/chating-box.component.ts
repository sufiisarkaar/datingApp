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
    // this.chatBot();
  }
  

  chatBot() {
    let msg = this.SendMessage.value;
    if(msg.msg === "hii") {
      this.reply.push("hi");
      console.log("thisreply", this.reply);
    } else if(msg == "how r u") {
      this.reply.push("fine..! and you?");
    } else if(msg == "fine") {
      this.reply.push("good");
    }
    //  else {
    //   console.log("thisreply", this.reply);
    //   this.reply.push("Sorry...");
    // }
  }


  sendMessage(){
    let MSG = this.SendMessage.value;
    if(this.SendMessage.valid){
      this.ChatArray.push(MSG);
      this.SendMessage.reset();
    }

  }
  
}
