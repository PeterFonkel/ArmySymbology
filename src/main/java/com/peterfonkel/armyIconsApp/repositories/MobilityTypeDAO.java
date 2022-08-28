package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import com.peterfonkel.armyIconsApp.entities.BranchType;
import com.peterfonkel.armyIconsApp.entities.MobilityType;


@RepositoryRestResource(path = "mobilityTypes", itemResourceRel = "mobilityType", collectionResourceRel = "mobilityTypes")
public interface MobilityTypeDAO extends JpaRepository<MobilityType, Long> {

	List<MobilityType> findAll();
	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends MobilityType> S save(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteById(Long id);
	
	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void delete(MobilityType entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllById(Iterable<? extends Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll(Iterable<? extends MobilityType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void flush();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends MobilityType> S saveAndFlush(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends MobilityType> List<S> saveAllAndFlush(Iterable<S> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteInBatch(Iterable<MobilityType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch(Iterable<MobilityType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllByIdInBatch(Iterable<Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch();
}
