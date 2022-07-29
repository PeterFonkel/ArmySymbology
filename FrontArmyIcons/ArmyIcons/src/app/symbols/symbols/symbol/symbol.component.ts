import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Symbol } from '../../models/symbol';


@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styles: []
})
export class SymbolComponent implements OnInit {

  @Input() symbol: Symbol;
  @Output() deleteSymbolEvent = new EventEmitter<Symbol>();
  @Output() modifySymbolEvent = new EventEmitter<Symbol>();

  constructor() { }

  ngOnInit() {
  }
  deleteSymbol(): void {
    this.deleteSymbolEvent.emit(this.symbol); 
  }
  openModifyModal(): void {
    this.modifySymbolEvent.emit(this.symbol);
  }

}
