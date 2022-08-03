package com.peterfonkel.armyIconsApp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MobilityType {
	
	@Id
	@GeneratedValue
	Long id;
	
	private String mobility;

	
	
	public MobilityType() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMobility() {
		return mobility;
	}

	public void setMobility(String mobility) {
		this.mobility = mobility;
	}


	

}
