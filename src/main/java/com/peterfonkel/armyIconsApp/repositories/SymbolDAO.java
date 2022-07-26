package com.peterfonkel.armyIconsApp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.peterfonkel.armyIconsApp.entities.Symbol;

@RepositoryRestResource(path = "symbols", itemResourceRel = "symbol", collectionResourceRel = "symbols")
public interface SymbolDAO extends JpaRepository<Symbol, Long>{

	List<Symbol> findAll();
	
}
