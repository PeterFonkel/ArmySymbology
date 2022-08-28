import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/seguridad/service/login.service';
import { Symbol } from '../../models/symbol';


@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styles: []
})
export class SymbolComponent implements OnInit {
  isLoggedUser;
  isLoggedAdmin;

  @Input() symbol: Symbol;
  @Output() deleteSymbolEvent = new EventEmitter<Symbol>();
  @Output() modifySymbolEvent = new EventEmitter<Symbol>();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getIsLoggedFlagObs().subscribe((flag) => {
      this.isLoggedUser = flag;
    });
     this.loginService.getIsAdminFlagObs().subscribe((flag) => {
      this.isLoggedAdmin = flag;
    });
  }

  deleteSymbol(): void {
    this.deleteSymbolEvent.emit(this.symbol); 
  }
  openModifyModal(): void {
    this.modifySymbolEvent.emit(this.symbol);
  }

}
