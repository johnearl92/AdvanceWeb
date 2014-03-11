package com.rococo.global.dao.grocery;

import com.rococo.global.model.grocery.Passenger;

public interface PassengerDao {
	/**
     * @param Passenger passenger
     * @return integer specifying if the passenger was successfully added.
     */
    public int insertPassenger(Passenger passenger);
}
