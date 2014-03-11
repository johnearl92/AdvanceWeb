package com.rococo.global.model.grocery;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "plane")
public class Plane implements Serializable {
	
	@Id
    @GeneratedValue
    @Column(name="plane_id")
	private int plane_id;
	
	@Column(name="plane_name")
	private String plane_name;
	
	@Column(name="plane_capacity")
	private int plane_capacity;
	
	@Column(name="plane_row")
	private int row;
	
	public int getRow() {
		return row;
	}

	public void setRow(int row) {
		this.row = row;
	}

	/*
	 * @return plane_id
	 */
	public int getId() {
        return plane_id;
    }
	
	/*
	 * @param id item id
	 */
	public void setId(int Id) {
		plane_id = Id;
	}
	
	/*
	 * @return plane_name
	 */
	public String getPlaneName() {
        return plane_name;
    }
	
	/*
	 * @param String item pName
	 */
	public void setPlaneName(String pName) {
		plane_name = pName;
	}
	
	/*
	 * @return plane_capacity
	 */
	public int getPlaneCapacity() {
        return plane_capacity;
    }
	
	/*
	 * @param id item cap
	 */
	public void setPlaneCapacity(int cap) {
		plane_capacity = cap;
	}
}
