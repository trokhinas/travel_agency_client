import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';
import {User} from './User';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userForm: FormGroup;
  @Input()
  public user: User;

  constructor(private userService: UserService,
              private location: PlatformLocation) { }

  ngOnInit() {
    this.buildForm();
    this.setForm();
  }

  private buildForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('',
        [Validators.minLength(4),
        Validators.maxLength(50) ,
        Validators.required]),
      lastName: new FormControl('',
        [Validators.minLength(6),
          Validators.maxLength(50) ,
          Validators.required]),

      email: new FormControl('',
        [Validators.email,
          Validators.maxLength(50),
          Validators.required] ),
      password: new FormControl('',
        [Validators.required,
          Validators.maxLength(25)]),

      birthday: new FormControl('',
        [Validators.required]),
      nickname: new FormControl('',
        [Validators.maxLength(50)])

    });
  }
  private setForm() {
    this.userForm.setValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,

      email: this.user.email,
      password: this.user.password,

      birthday: this.user.birthday,
      nickname: this.user.nickname
    });
    this.userForm.valueChanges.subscribe(() => {
      this.user.firstName = this.userForm.value['firstName'];
      this.user.lastName = this.userForm.value['lastName'];

      this.user.email = this.userForm.value['email'];
      this.user.password = this.userForm.value['password'];

      this.user.birthday = this.userForm.value['birthday'];
      this.user.nickname = this.userForm.value['nickname'];
    });
  }
  private back() {
    this.location.back();
  }
  private submit() {
    this.userService
      .updateUser(this.user)
      .subscribe(() => this.back());
  }

}
