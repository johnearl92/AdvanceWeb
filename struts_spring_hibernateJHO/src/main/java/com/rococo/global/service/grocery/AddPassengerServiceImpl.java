package com.rococo.global.service.grocery;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.rococo.global.dao.grocery.PassengerDao;
import com.rococo.global.model.grocery.Passenger;

public class AddPassengerServiceImpl implements AddPassengerService {
	
	/* the dao */
    @Autowired
    @Qualifier("passengerDao")
    private PassengerDao dao;
	
	public int addPassenger(String firstname, 
			String lastname, String middlename, String birthdate, 
			String contactno, String address, String gender, String email) {
		Passenger passenger = new Passenger();
		//passenger.setId(passenger_id);
		passenger.setFirstname(firstname);
		passenger.setLastname(lastname);
		passenger.setMiddlename(middlename);
		passenger.setBirthdate(birthdate);
		passenger.setContactno(contactno);
		passenger.setAddress(address);
		passenger.setGender(gender);
		passenger.setEmail(email);
		return dao.insertPassenger(passenger);
	}
	
}
