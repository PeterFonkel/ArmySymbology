package com.peterfonkel.armyIconsApp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class SpecialType {
	
	@Id
	@GeneratedValue
	Long id;
	
	private String specialCapability;

	
	
	public SpecialType() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSpecialCapability() {
		return specialCapability;
	}

	public void setSpecialCapability(String specialCapability) {
		this.specialCapability = specialCapability;
	}




	

}
