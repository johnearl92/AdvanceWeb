package com.rococo.global.service.grocery;

import java.text.ParseException;
import java.util.Date;

public interface AddPassengerService {

	/**
	 * Adds a Passenger.
	 * @param first_name
	 * @param last_name
	 * @param middle_name
	 * @param birthdate
	 * @param contact_no
	 * @param address
	 * @param gender
	 * @param email
	 * @throws ParseException 
	 */
	public int addPassenger(String firstname, 
			String lastname, String middlename, String birthdate, 
			String contactno, String address, String gender, String email);
	
}
