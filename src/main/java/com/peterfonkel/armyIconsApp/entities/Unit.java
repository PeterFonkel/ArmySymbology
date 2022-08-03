package com.peterfonkel.armyIconsApp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Unit extends Symbol {
	
	private String size = "";
	private String branch = "";
	private String mobility = "";
	private String specialCapability = "";
		
	public Unit() {
		super();
	}

	public Unit(String affiliation, String type, String url, String  size, String branch, String mobility, String specialCapability) {
		
		super(affiliation, url);
		this.size = size;
		this.branch = branch;
		this.mobility = mobility;
		this.specialCapability = specialCapability;
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	public String getMobility() {
		return mobility;
	}

	public void setMobility(String mobility) {
		this.mobility = mobility;
	}

	public String getSpecialCapability() {
		return specialCapability;
	}

	public void setSpecialCapability(String specialCapability) {
		this.specialCapability = specialCapability;
	}

	@Override
	public String toString() {
		return "Unit [id=" + id + ", size=" + size + ", branch=" + branch + ", mobility=" + mobility
				+ ", specialCapability=" + specialCapability + "]";
	}
	
}
