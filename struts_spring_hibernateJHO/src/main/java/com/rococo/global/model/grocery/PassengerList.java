package com.rococo.global.model.grocery;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@SuppressWarnings("serial")
@Entity
@Table(name="passenger_list")
public class PassengerList implements Serializable {

	@Id
    @GeneratedValue
    @Column(name="reservation_id")
	int reservation_id;
	
	@Column(name="passenger_id")
	int passenger_id;
	
	@Id
	@Column(name="plane_id")
	int plane_id;
	
	@Column(name="seat_no")
	String seat_no;
	
	/*
	 * @return seat_no
	 */

	
	/*
	 * @param id item seatNo
	 */


	public int getReservation_id() {
		return reservation_id;
	}

	public void setReservation_id(int reservation_id) {
		this.reservation_id = reservation_id;
	}

	public int getPassenger_id() {
		return passenger_id;
	}

	public void setPassenger_id(int passenger_id) {
		this.passenger_id = passenger_id;
	}

	public int getPlane_id() {
		return plane_id;
	}

	public void setPlane_id(int plane_id) {
		this.plane_id = plane_id;
	}

	public String getSeat_no() {
		return seat_no;
	}

	public void setSeat_no(String seat_no) {
		this.seat_no = seat_no;
	}
    
    
}

