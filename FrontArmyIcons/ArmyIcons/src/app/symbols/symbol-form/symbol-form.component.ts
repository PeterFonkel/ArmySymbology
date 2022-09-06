import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-symbol-form',
  templateUrl: './symbol-form.component.html',
  styles: []
})
export class SymbolFormComponent implements OnInit {

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

  //Crear un simbolo nuevo
  postSymbol(): void {
    this.symbolsService.postSymbol(this.symbol).subscribe(response=>{
      let symbolReceived = new Symbol();
      symbolReceived = response;
      symbolReceived.id = this.symbolsService.mapearSymbol(response);
      this.subirImagen(symbolReceived.id);
    })
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
