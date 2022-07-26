package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.peterfonkel.armyIconsApp.entities.Unit;

@RepositoryRestResource(path = "units", itemResourceRel = "unit", collectionResourceRel = "units")
public interface UnitDAO extends JpaRepository<Unit, Long>{
	List<Unit> findAll();
}
