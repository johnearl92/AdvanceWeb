package com.rococo.global.dto.grocery;

public class PlaneDto {
	private String planeName;
	private int planeID;
	private int planeCapacity;
	private int planeRows;
	
	public int getPlaneRows() {
		return planeRows;
	}
	public void setPlaneRows(int planeRows) {
		this.planeRows = planeRows;
	}
	public PlaneDto(){
		
	}
	public PlaneDto(String name,int capacity,int id, int rows){
		this.planeCapacity = capacity;
		this.planeName = name;
		this.planeID = id;
		this.planeRows = rows;
	}
	public String getPlaneName() {
		return planeName;
	}
	public void setPlaneName(String planeName) {
		this.planeName = planeName;
	}
	public int getPlaneID() {
		return planeID;
	}
	public void setPlaneID(int planeID) {
		this.planeID = planeID;
	}
	public int getPlaneCapacity() {
		return planeCapacity;
	}
	public void setPlaneCapacity(int planeCapacity) {
		this.planeCapacity = planeCapacity;
	}
}
