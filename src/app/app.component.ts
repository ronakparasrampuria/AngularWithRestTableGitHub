import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TableDataWithRest';

  constructor(private rs:RestService){

  }
  columns = ["User Id","First Name","Last Name","Phone Number"];
  index = ["id","FirstName","LastName","Phonenumber"];

  users : Users[] = [];

  ngOnInit():void{
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users = response;
      },
      (error) => console.log(error)
    )
  }

}
