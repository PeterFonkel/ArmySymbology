import { Component, OnInit } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { AffiliationType } from '../models/affiliationType';
import { BranchType } from '../models/branchType';
import { Imagen } from '../models/Imagen';
import { MobilityType } from '../models/mobilityType';
import { SizeType } from '../models/sizeType';
import { SpecialType } from '../models/specialType';
import { Symbol } from '../models/symbol';
import { AffiliationTipeService } from '../service/affiliation-tipe.service';
import { BranchTipeService } from '../service/branch-tipe.service';
import { ImagenesService } from '../service/imagenes.service';
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
  imagenASubir: Imagen;
  archivoASubir: File;

  constructor(private symbolsService: SymbolsService, 
    private sizeTypeService: SizeTipeService, 
    private branchTypeService: BranchTipeService,
    private mobilityTypeService: MobilityTipeService,
    private specialTypeService: SpecialTipeService,
    private affiliationTypeService: AffiliationTipeService,
    private imagenesService: ImagenesService) { 
  }

  ngOnInit() {

    //Obtener los tipos de seleccion
    this.sizeTypeService.getSizeTypes().subscribe(response=>{
      this.sizeTypes = response;
    })
    this.branchTypeService.getBranchTypes().subscribe(response=>{
      this.branchTypes = response;
    })
    this.mobilityTypeService.getMobilityTypes().subscribe(response=>{
      this.mobilityTypes = response;
    })
    this.specialTypeService.getSpecialTypes().subscribe(response=>{
      this.specialTypes = response;
    })
    this.affiliationTypeService.getAffiliationTypes().subscribe(response=>{
      this.affiliationTypes = response;
    })

    //Todos los atributos del simbolo para búsqueda en vacio
    this.symbolSearch.affiliation = "";
    this.symbolSearch.branch = "";
    this.symbolSearch.mobility = "";
    this.symbolSearch.size = "";
    this.symbolSearch.specialCapability = "";
  }

  //Borrar un simbolo
  deleteSymbol(symbol: any) {
    this.symbolsService.deleteSymbol(symbol.id).subscribe(response=>{
      this.imagenesService.deleteImage(symbol.imagen[0], symbol.id);
      this.searchSymbols();
    })
  }

  //Modificar un simbolo
  modifySymbol() {
    this.symbolsService.patchSymbol(this.symbol).subscribe(response=>{
      if (this.imagenASubir.url !== undefined) {
        this.imagenesService.deleteImage(this.symbol.imagen[0], this.symbol.id);
        this.imagenesService.subirImagen(this.archivoASubir, this.symbol.id);
      }
      this.searchSymbols();
    })
  }

  //Abrir el modal de modificación de símbolo
  openModalModify(symbol: Symbol): void {
    this.symbol = symbol;
    $("#modifyModal").modal('show');
  }

  //Abrir el modal de crear nuevo simbolo
  openModalPost(): void {
    this.symbol = new Symbol();
    $("#postModal").modal('show');
  }

  //Crear un simbolo nuevo
  postSymbol(): void {
    this.symbolsService.postSymbol(this.symbol).subscribe(response=>{
      let symbolReceived = new Symbol();
      symbolReceived = response;
      symbolReceived.id = this.symbolsService.mapearSymbol(response);
      this.subirImagen(symbolReceived.id);
      this.searchSymbols();
    })
  }
  
  //Buscar simbolos por campos 
  searchSymbols(): void {
    this.symbols = [];
    this.symbolsService.searchSymbols(this.symbolSearch).subscribe(symbols=>{
      this.symbols = symbols;
      this.symbols.forEach(symbol => {   
        symbol.id = this.symbolsService.mapearSymbol(symbol);
        this.imagenesService.getImagen(symbol.id).subscribe(imagenes=>{
          symbol.imagen = imagenes;
        });
      });
    });
  }

  //Seleccionar una imagen del equipo para subir
  seleccionarImagen(e: any): any {
    this.imagenASubir = new Imagen();
    for (let index = 0; index < e.target.files.length; index++) {
      let imagen = new Imagen();
      imagen.nombre = e.target.files[index].name;
      imagen.url = URL.createObjectURL(e.target.files[index]);
      this.imagenASubir = imagen;
      this.archivoASubir = e.target.files[index];
    }
  }

  //Subir la imagen principal seleccionada
  subirImagen(id: string): void {
    if (this.archivoASubir) {
      this.imagenesService.subirImagen(this.archivoASubir, id);
      this.imagenesService.getImagen(id).subscribe(response => {
        })
      }
    } 
}
