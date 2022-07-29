import { Component, OnInit } from '@angular/core';
import { Symbol } from '../models/symbol';
import { SymbolsService } from '../service/symbols.service';

declare var $: any;

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styles: []
})
export class SymbolsComponent implements OnInit {
  
  symbols: Symbol[] = [];
  symbol: Symbol = new Symbol();

  constructor(private symbolsService: SymbolsService) { 
    
  }

  ngOnInit() {
    this.symbolsService.getSymbols().subscribe(response=>{
      console.log(response)
      this.symbols = response;
      this.symbols.forEach(element => {
        element.id = this.symbolsService.mapearSymbol(element);
      });
    })
  }

  deleteSymbol(symbol: any) {
    this.symbolsService.deleteSymbol(symbol.id).subscribe(response=>{
      this.ngOnInit();
    })
  }
  modifySymbol() {
    this.symbolsService.patchSymbol(this.symbol).subscribe(response=>{
      this.ngOnInit();
    })
  }
  openModalModify(symbol: Symbol): void {
    this.symbol = symbol;
    $("#modifyModal").modal('show');
  }
  openModalPost(): void {
    this.symbol = new Symbol();
    $("#postModal").modal('show');
  }

  postSymbol(): void {
    this.symbolsService.postSymbol(this.symbol).subscribe(response=>{
      this.ngOnInit();
    })
  }
}
