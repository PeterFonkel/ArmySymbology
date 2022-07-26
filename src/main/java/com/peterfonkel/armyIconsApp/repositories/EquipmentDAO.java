package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.peterfonkel.armyIconsApp.entities.Equipment;
import com.peterfonkel.armyIconsApp.entities.Unit;

@RepositoryRestResource(path = "equipments", itemResourceRel = "equipment", collectionResourceRel = "equipments")
public interface EquipmentDAO extends JpaRepository<Equipment, Long>{
	List<Equipment> findAll();
}
