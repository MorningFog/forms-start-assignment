import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form', { static: false }) submittedForm: NgForm;

  submitted = false;

  subType = 'advanced';

  submittedData = {
    email: '',
    subType: '',
    password: ''
  };

  onSubmit() {
    this.submitted = true;

    this.submittedData.email = this.submittedForm.value.userData.useremail;
    this.submittedData.subType = this.submittedForm.value.userData.subType;
    this.submittedData.password = this.submittedForm.value.userData.password;

    this.submittedForm.reset(
      {
        userData: {
          subType: 'advanced'
        }
      });
  }
}
