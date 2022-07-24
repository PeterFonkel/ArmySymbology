package com.militarysymbology.simbologyApp.entities;

public class Unit extends Symbol {
	private String size;
	private String branch;
	private String mobility;
	private String specialCapability;
		
	public Unit() {
		super();
	}

	public Unit(String size, String branch, String mobility) {
		this();
		this.size = size;
		this.branch = branch;
		this.mobility = mobility;
	}

	public Unit(String size, String branch, String mobility, String specialCapability, String unitIdentifier) {
		this(size, branch, mobility);
		this.specialCapability = specialCapability;
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
	
	
}
