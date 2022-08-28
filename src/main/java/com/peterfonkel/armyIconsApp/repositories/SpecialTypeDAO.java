package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import com.peterfonkel.armyIconsApp.entities.BranchType;
import com.peterfonkel.armyIconsApp.entities.MobilityType;
import com.peterfonkel.armyIconsApp.entities.SpecialType;


@RepositoryRestResource(path = "specialTypes", itemResourceRel = "specialType", collectionResourceRel = "specialTypes")
public interface SpecialTypeDAO extends JpaRepository<SpecialType, Long> {

	List<SpecialType> findAll();
	
	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends SpecialType> S save(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteById(Long id);
	
	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void delete(SpecialType entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllById(Iterable<? extends Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll(Iterable<? extends SpecialType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void flush();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends SpecialType> S saveAndFlush(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends SpecialType> List<S> saveAllAndFlush(Iterable<S> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteInBatch(Iterable<SpecialType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch(Iterable<SpecialType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllByIdInBatch(Iterable<Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch();
}
