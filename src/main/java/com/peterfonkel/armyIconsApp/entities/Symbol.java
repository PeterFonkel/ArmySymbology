package com.peterfonkel.armyIconsApp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import org.springframework.stereotype.Component;

@Entity
@Inheritance( strategy = InheritanceType.SINGLE_TABLE )
public class Symbol {
	
	@Id
	@GeneratedValue
	Long id;
	
	private String affiliation ="";
	
	public Symbol() {
		super();
	}
			
	public Symbol(String affiliation) {
		super();
		this.affiliation = affiliation;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getAffiliation() {
		return affiliation;
	}
	
	public void setAffiliation(String affiliation) {
		this.affiliation = affiliation;
	}	
}
