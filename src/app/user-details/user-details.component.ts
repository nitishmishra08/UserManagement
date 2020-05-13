import { Component, OnInit, OnDestroy } from '@angular/core';
import { postDataCaptureService } from '../post-dataCapture.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
//import { UserPost } from '../user-post.modal';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit,OnDestroy {

  loadingIndicator:boolean= false;
  //user: UserPost;
  user=[];
  susbscription:Subscription;
  
  constructor(
    private userService: postDataCaptureService,
    private route: ActivatedRoute
  ){
    this.susbscription= this.route.params.subscribe(param => {
      console.log(param)
      if(param){
         this.userService.getUserOnSelect(param.id).subscribe(val =>{
           if(val){
           this.user=val[0];
           this.loadingIndicator= true;
           console.log(this.user);
           }
         });
        
        
      }
    })
  }

    ngOnInit(){
      
    

}
ngOnDestroy(){
  this.susbscription.unsubscribe();
}
}
