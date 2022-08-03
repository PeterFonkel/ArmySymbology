package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.peterfonkel.armyIconsApp.entities.AffiliationType;
import com.peterfonkel.armyIconsApp.entities.MobilityType;
import com.peterfonkel.armyIconsApp.entities.SpecialType;


@RepositoryRestResource(path = "affiliationTypes", itemResourceRel = "affiliationType", collectionResourceRel = "affiliationTypes")
public interface AffiliationTypeDAO extends JpaRepository<AffiliationType, Long> {

	List<AffiliationType> findAll();
}
