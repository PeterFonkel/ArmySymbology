package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import com.peterfonkel.armyIconsApp.entities.AffiliationType;
import com.peterfonkel.armyIconsApp.entities.BranchType;
import com.peterfonkel.armyIconsApp.entities.MobilityType;
import com.peterfonkel.armyIconsApp.entities.SpecialType;


@RepositoryRestResource( path = "affiliationTypes", itemResourceRel = "affiliationType", collectionResourceRel = "affiliationTypes")
public interface AffiliationTypeDAO extends JpaRepository<AffiliationType, Long> {

	List<AffiliationType> findAll();
	
	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends AffiliationType> S save(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteById(Long id);
	
	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void delete(AffiliationType entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllById(Iterable<? extends Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll(Iterable<? extends AffiliationType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void flush();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends AffiliationType> S saveAndFlush(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends AffiliationType> List<S> saveAllAndFlush(Iterable<S> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteInBatch(Iterable<AffiliationType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch(Iterable<AffiliationType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllByIdInBatch(Iterable<Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch();
}
