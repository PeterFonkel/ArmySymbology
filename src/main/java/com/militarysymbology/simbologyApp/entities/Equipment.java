package com.militarysymbology.simbologyApp.entities;

public class Equipment extends Symbol{
	private String material;

	public Equipment(String material) {
		super();
		this.material = material;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}
	
}
