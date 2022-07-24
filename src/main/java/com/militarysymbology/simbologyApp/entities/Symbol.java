package com.militarysymbology.simbologyApp.entities;

public class Symbol implements Drawable {
	
	private String affiliation;
	private String type;
	private String url;
	
	public Symbol() {
		super();
	}
	public Symbol(String affiliation, String type) {
		this();
		this.affiliation = affiliation;
		this.type = type;
	}
	
	public String getAffiliation() {
		return affiliation;
	}
	
	public void setAffiliation(String affiliation) {
		this.affiliation = affiliation;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
}
