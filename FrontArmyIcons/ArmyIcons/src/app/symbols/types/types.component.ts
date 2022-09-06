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
import { MobilityTipeService } from '../service/mobility-tipe.service';
import { SizeTipeService } from '../service/size-tipe.service';
import { SpecialTipeService } from '../service/special-tipe.service';
import { SymbolsService } from '../service/symbols.service';

declare var $: any;

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

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
  newSizeType: SizeType = new SizeType();
  newBranchType: BranchType = new BranchType();
  newAffiliationType: AffiliationType = new AffiliationType();
  newMobilityType: MobilityType = new MobilityType();
  newSpecialType: SpecialType = new SpecialType();

  constructor(private symbolsService: SymbolsService, 
    private sizeTypeService: SizeTipeService, 
    private branchTypeService: BranchTipeService,
    private mobilityTypeService: MobilityTipeService,
    private specialTypeService: SpecialTipeService,
    private affiliationTypeService: AffiliationTipeService) { 
  }

  ngOnInit() {
    
    this.getTypes();
    
  }

  getTypes(): void {
    //Obtener los tipos de seleccion
    this.sizeTypeService.getSizeTypes().subscribe(response=>{
      this.sizeTypes = response;
      this.sizeTypes.forEach(size => {
        size.id = this.sizeTypeService.mapearType(size);
      });
    })

    this.affiliationTypeService.getAffiliationTypes().subscribe(response=>{
      this.affiliationTypes = response;
      this.affiliationTypes.forEach(affiliation => {
        affiliation.id = this.affiliationTypeService.mapearType(affiliation);
      })
    })

    this.branchTypeService.getBranchTypes().subscribe(response=>{
      this.branchTypes = response;
      this.branchTypes.forEach(branch => {
        branch.id = this.branchTypeService.mapearType(branch);
      });
    })

    this.mobilityTypeService.getMobilityTypes().subscribe(response=>{
      this.mobilityTypes = response;
      this.mobilityTypes.forEach(mobility => {
        mobility.id = this.mobilityTypeService.mapearType(mobility);
      });
    })

    this.specialTypeService.getSpecialTypes().subscribe(response=>{
      this.specialTypes = response;
      this.specialTypes.forEach(special => {
        special.id = this.specialTypeService.mapearType(special);
      });
    })
   

    //Todos los atributos del simbolo para búsqueda en vacio
    this.symbolSearch.affiliation = "";
    this.symbolSearch.branch = "";
    this.symbolSearch.mobility = "";
    this.symbolSearch.size = "";
    this.symbolSearch.specialCapability = "";
  }

  //Eliminar un SizeType
  deleteSizeType(id: string): void {
    this.sizeTypeService.deleteSize(id).subscribe(response=>{
      this.getTypes();
    });
  }

  //Abrir el modal de crear nuevo SizeType
  openModalPostSize(): void {
    this.symbol = new Symbol();
    $("#postSizeModal").modal('show');
  }

  //Crear un SizeType nuevo
  postSizeType(): void {
    this.sizeTypeService.postType(this.newSizeType).subscribe(response=>{
      this.getTypes();
    }
    );
  }

    //Eliminar un BranchType
    deleteBranchType(id: string): void {
      this.branchTypeService.deleteBranch(id).subscribe(response=>{
        this.getTypes();
      });
    }
  
    //Abrir el modal de crear nuevo BranchType
    openModalPostBranch(): void {
      this.symbol = new Symbol();
      $("#postBranchModal").modal('show');
    }
  
    //Crear un BranchType nuevo
    postBranchType(): void {
      this.branchTypeService.postType(this.newBranchType).subscribe(response=>{
        this.getTypes();
      }
      );
    }

     //Eliminar un BranchType
     deleteAffiliationType(id: string): void {
      this.affiliationTypeService.deleteAffiliation(id).subscribe(response=>{
        this.getTypes();
      });
    }
  
    //Abrir el modal de crear nuevo BranchType
    openModalPostAffiliation(): void {
      this.symbol = new Symbol();
      $("#postAffiliationModal").modal('show');
    }
  
    //Crear un BranchType nuevo
    postAffiliationType(): void {
      this.affiliationTypeService.postType(this.newAffiliationType).subscribe(response=>{
        this.getTypes();
      }
      );
    }

    //Eliminar un MobilityType
    deleteMobilityType(id: string): void {
      this.mobilityTypeService.deleteMobility(id).subscribe(response=>{
        this.getTypes();
      });
    }
  
    //Abrir el modal de crear nuevo MobilityType
    openModalPostMobility(): void {
      this.symbol = new Symbol();
      $("#postMobilityModal").modal('show');
    }
  
    //Crear un MobilityType nuevo
    postMobilityType(): void {
      this.mobilityTypeService.postType(this.newMobilityType).subscribe(response=>{
        this.getTypes();
      }
      );
    }

    //Eliminar un SpecialType
    deleteSpecialType(id: string): void {
      this.specialTypeService.deleteSpecial(id).subscribe(response=>{
        this.getTypes();
      });
    }
  
    //Abrir el modal de crear nuevo SpecialType
    openModalPostSpecial(): void {
      this.symbol = new Symbol();
      $("#postSpecialModal").modal('show');
    }
  
    //Crear un SpecialType nuevo
    postSpecialType(): void {
      this.specialTypeService.postType(this.newSpecialType).subscribe(response=>{
        this.getTypes();
      }
      );
    }

}
