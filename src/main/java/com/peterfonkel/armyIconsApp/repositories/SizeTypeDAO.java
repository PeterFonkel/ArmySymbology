package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import com.peterfonkel.armyIconsApp.entities.BranchType;
import com.peterfonkel.armyIconsApp.entities.SizeType;

@RepositoryRestResource(path = "sizeTypes", itemResourceRel = "sizeType", collectionResourceRel = "sizeTypes")
public interface SizeTypeDAO extends JpaRepository<SizeType, Long>{
	List<SizeType> findAll();
	
	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends SizeType> S save(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteById(Long id);
	
	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void delete(SizeType entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllById(Iterable<? extends Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll(Iterable<? extends SizeType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAll();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void flush();

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends SizeType> S saveAndFlush(S entity);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	<S extends SizeType> List<S> saveAllAndFlush(Iterable<S> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteInBatch(Iterable<SizeType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch(Iterable<SizeType> entities);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllByIdInBatch(Iterable<Long> ids);

	@Override
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteAllInBatch();
}
