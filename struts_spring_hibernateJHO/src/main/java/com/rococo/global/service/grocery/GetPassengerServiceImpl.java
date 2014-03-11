package com.rococo.global.service.grocery;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.rococo.global.dao.grocery.PassengerListDao;
import com.rococo.global.dto.grocery.PassengerDto;
import com.rococo.global.model.grocery.Passenger;

public class GetPassengerServiceImpl implements GetPassengerService {
	@Autowired
    @Qualifier("passengerListDao")
	private PassengerListDao passengerListDao;
	
	public PassengerListDao getDao()
	{
		return this.passengerListDao;
	}
	
    public void setDao(PassengerListDao PLDao)
    {
    	this.passengerListDao=PLDao;
    }

	public List<PassengerDto> searchAllPassengers() {
		List<Passenger> modelList = passengerListDao.searchAllPassengers();
        List<PassengerDto> airline = new ArrayList<PassengerDto>();
        
        	
    		for(Passenger currentmodel :modelList)
    		{
    			PassengerDto currentdto= new PassengerDto();
    			currentdto.setFirstname(currentmodel.getFirstname());
    			currentdto.setMiddlename(currentmodel.getMiddlename());
    			currentdto.setLastname(currentmodel.getLastname());
    			currentdto.setBirthdate(currentmodel.getBirthdate());			
    			currentdto.setAddress(currentmodel.getAddress());
    			currentdto.setContactNo(currentmodel.getContactno());
    			currentdto.setEmail(currentmodel.getEmail());
    			currentdto.setGender(currentmodel.getGender());
  
    			currentdto.setId(currentmodel.getPassenger_id());

    			airline.add(currentdto);
    		}
        	
        
		//object to return
		
		return airline;
		// TODO Auto-generated method stub
		//return null;
	}
}
