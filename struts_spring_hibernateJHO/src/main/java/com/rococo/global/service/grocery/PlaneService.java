package com.rococo.global.service.grocery;

import java.util.List;

import com.rococo.global.dto.grocery.PlaneDto;

public interface PlaneService {
	public List<PlaneDto> getPlanes();
	public void saveReservation(int planeID,String seatNo, String name);
}
