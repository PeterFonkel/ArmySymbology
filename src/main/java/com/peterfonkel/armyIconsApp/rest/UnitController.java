package com.peterfonkel.armyIconsApp.rest;

import java.util.ArrayList;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.peterfonkel.armyIconsApp.entities.Unit;
import com.peterfonkel.armyIconsApp.repositories.UnitDAO;

@RepositoryRestController
@RequestMapping("/units/search")
@CrossOrigin
public class UnitController {
	@Autowired
	UnitDAO unitDAO;

	public UnitController(UnitDAO unitDAO) {
		this.unitDAO = unitDAO;
		
	}
	
	@PostMapping(path = "unitSearch")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getUnitsFiltered(PersistentEntityResourceAssembler assembler, @RequestBody Unit unitSearchReceived) {
		System.out.println("En controller");
		Unit unitSearch = unitSearchReceived;
		List<Unit> unitList = unitDAO.findAll();
		System.out.println(unitList);
		List<Unit> unitListSelected = new ArrayList<>();
		for (Unit unit : unitList) {
			if(unit.getAffiliation().equals(unitSearch.getAffiliation()) || unitSearch.getAffiliation() == "") {
				if(unit.getSize().equals(unitSearch.getSize()) || unitSearch.getSize() == "") {
					if(unit.getBranch().equals(unitSearch.getBranch()) || unitSearch.getBranch() == "") {
						if(unit.getMobility().equals(unitSearch.getMobility()) || unitSearch.getMobility() == "") {
							if(unit.getSpecialCapability().equals(unitSearch.getSpecialCapability()) || unitSearch.getSpecialCapability() == "") {
								unitListSelected.add(unit);
							}
						}
					}
				}
	
			}
		}
		return assembler.toCollectionModel(unitListSelected);
	}
	
	
}
