package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.peterfonkel.armyIconsApp.entities.SizeType;

@RepositoryRestResource(path = "sizeTypes", itemResourceRel = "sizeType", collectionResourceRel = "sizeTypes")
public interface SizeTypeDAO extends JpaRepository<SizeType, Long>{
	List<SizeType> findAll();
}
