package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import com.peterfonkel.armyIconsApp.entities.BranchType;


@RepositoryRestResource(path = "branchTypes", itemResourceRel = "branchType", collectionResourceRel = "branchTypes")
public interface BranchTypeDAO extends JpaRepository<BranchType, Long> {

	List<BranchType> findAll();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends BranchType> S save(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteById(Long id);
	
	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void delete(BranchType entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllById(Iterable<? extends Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll(Iterable<? extends BranchType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void flush();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends BranchType> S saveAndFlush(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends BranchType> List<S> saveAllAndFlush(Iterable<S> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteInBatch(Iterable<BranchType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch(Iterable<BranchType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllByIdInBatch(Iterable<Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch();
	
}
