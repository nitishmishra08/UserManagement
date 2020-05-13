import { Component, OnInit, OnDestroy } from '@angular/core';
import { postDataCaptureService } from '../post-dataCapture.service';

import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  susbscriptionUser: Subscription;
  userData = [];
  userList = [];
  userPost = [];
  filteredUser = [];

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredUser = this.filteredEmployee(value)
  }
  filteredEmployee(searchString: string) {
    return this.userList.filter(user =>
      user.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }

  constructor(private userService: postDataCaptureService) {

    const one = this.userService.getAlluser();
    const two = this.userService.getAllPost();

    const combination = forkJoin([one, two])
    this.susbscriptionUser = combination.subscribe(result => {
      this.userData.push(result);
      this.userList = this.userData[0][0];
      this.userPost = this.userData[0][1];
      console.log(this.userList);
      console.log(this.userPost);

      const fixedlength = 10;
      for (var i = 0; i < fixedlength; i++) {
        Object.assign(this.userList[i], this.userPost[i])
      }
      console.log(this.userList);
      this.filteredUser = this.userList;
    })


  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.susbscriptionUser.unsubscribe();

  }

}

