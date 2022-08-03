package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.peterfonkel.armyIconsApp.entities.MobilityType;
import com.peterfonkel.armyIconsApp.entities.SpecialType;


@RepositoryRestResource(path = "specialTypes", itemResourceRel = "specialType", collectionResourceRel = "specialTypes")
public interface SpecialTypeDAO extends JpaRepository<SpecialType, Long> {

	List<SpecialType> findAll();
}
