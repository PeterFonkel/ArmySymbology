package com.peterfonkel.armyIconsApp.entities;

import javax.persistence.Entity;

@Entity
public class Equipment extends Symbol{
	private String material;
	
	public Equipment() {
		super();
	}

	public Equipment(String affiliation, String type,String url, String material) {
		super(affiliation, url);
		this.material = material;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}
	
}
