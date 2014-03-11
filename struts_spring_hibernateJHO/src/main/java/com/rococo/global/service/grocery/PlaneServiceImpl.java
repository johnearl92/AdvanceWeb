package com.rococo.global.service.grocery;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.rococo.global.dao.grocery.PlaneDao;
import com.rococo.global.dto.grocery.PlaneDto;
import com.rococo.global.model.grocery.Plane;

public class PlaneServiceImpl implements PlaneService{
	 @Autowired
	 @Qualifier("planeDao")
	 private PlaneDao dao;

	public List<PlaneDto> getPlanes() {
		// TODO Auto-generated method stub
		List<Plane> planes = dao.getPlaneList();
		List<PlaneDto> planesObject = new ArrayList<PlaneDto>();
		for(Plane p:planes){
			PlaneDto plane = new PlaneDto();
			plane.setPlaneID(p.getId());
			plane.setPlaneName(p.getPlaneName());
			plane.setPlaneCapacity(p.getPlaneCapacity());
			plane.setPlaneRows(p.getRow());
			planesObject.add(plane);
			
		}
		return planesObject;
	}

	public void saveReservation(int planeID, String seatNo, String name) {
		// TODO Auto-generated method stub
		dao.saveResrvation(planeID, seatNo, name);
	}

	
	 
	 
}
