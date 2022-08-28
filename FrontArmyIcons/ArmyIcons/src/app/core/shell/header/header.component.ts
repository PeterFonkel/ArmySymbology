import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/seguridad/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  isLoggedUser;
  isLoggedAdmin;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getIsLoggedFlagObs().subscribe((flag) => {
      this.isLoggedUser = flag;
    });
     this.loginService.getIsAdminFlagObs().subscribe((flag) => {
      this.isLoggedAdmin = flag;
    });
    console.log(this.isLoggedAdmin)
  }

}
