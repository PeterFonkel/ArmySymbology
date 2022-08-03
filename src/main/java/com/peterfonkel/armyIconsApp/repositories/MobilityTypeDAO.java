package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.peterfonkel.armyIconsApp.entities.MobilityType;


@RepositoryRestResource(path = "mobilityTypes", itemResourceRel = "mobilityType", collectionResourceRel = "mobilityTypes")
public interface MobilityTypeDAO extends JpaRepository<MobilityType, Long> {

	List<MobilityType> findAll();
}
