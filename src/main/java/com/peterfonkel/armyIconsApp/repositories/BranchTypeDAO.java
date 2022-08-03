package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.peterfonkel.armyIconsApp.entities.BranchType;


@RepositoryRestResource(path = "branchTypes", itemResourceRel = "branchType", collectionResourceRel = "branchTypes")
public interface BranchTypeDAO extends JpaRepository<BranchType, Long> {

	List<BranchType> findAll();
}
