import { Component, OnInit } from '@angular/core';
import { AffiliationType } from '../models/affiliationType';
import { BranchType } from '../models/branchType';
import { MobilityType } from '../models/mobilityType';
import { SizeType } from '../models/sizeType';
import { SpecialType } from '../models/specialType';
import { Symbol } from '../models/symbol';
import { AffiliationTipeService } from '../service/affiliation-tipe.service';
import { BranchTipeService } from '../service/branch-tipe.service';
import { MobilityTipeService } from '../service/mobility-tipe.service';
import { SizeTipeService } from '../service/size-tipe.service';
import { SpecialTipeService } from '../service/special-tipe.service';
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
  symbolSearch: Symbol = new Symbol();
  sizeTypes: SizeType[] = []; 
  branchTypes: BranchType[] = [];
  mobilityTypes: MobilityType[] = [];
  specialTypes: SpecialType[] = [];
  affiliationTypes: AffiliationType[] = [];


  constructor(private symbolsService: SymbolsService, 
    private sizeTypeService: SizeTipeService, 
    private branchTypeService: BranchTipeService,
    private mobilityTypeService: MobilityTipeService,
    private specialTypeService: SpecialTipeService,
    private affiliationTypeService: AffiliationTipeService) { 
    
  }

  ngOnInit() {
    this.symbolsService.getSymbols().subscribe(response=>{
      console.log(response)
      this.symbols = response;
      this.symbols.forEach(element => {
        element.id = this.symbolsService.mapearSymbol(element);
      });
    })

    this.sizeTypeService.getSizeTypes().subscribe(response=>{
      this.sizeTypes = response;
      console.log(this.sizeTypes);
    })

    this.branchTypeService.getBranchTypes().subscribe(response=>{
      this.branchTypes = response;
      console.log(this.branchTypes);
    })

    this.mobilityTypeService.getMobilityTypes().subscribe(response=>{
      this.mobilityTypes = response;
      console.log(this.mobilityTypes);
    })

    this.specialTypeService.getSpecialTypes().subscribe(response=>{
      this.specialTypes = response;
      console.log(this.specialTypes);
    })

    this.affiliationTypeService.getAffiliationTypes().subscribe(response=>{
      this.affiliationTypes = response;
      console.log(this.affiliationTypes);
    })

    this.symbolSearch.affiliation = "";
    this.symbolSearch.branch = "";
    this.symbolSearch.mobility = "";
    this.symbolSearch.size = "";
    this.symbolSearch.specialCapability = "";
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
  searchSymbols(): void {
    this.symbols = [];
    this.symbolsService.searchSymbols(this.symbolSearch).subscribe(response=>{
      this.symbols = response;
    })
  }
}
