package com.rococo.global.dao.grocery;

import java.util.ArrayList;
import java.util.List;

import com.rococo.global.model.grocery.Plane;

public interface PlaneDao {
	public List<Plane> getPlaneList();
	public void saveResrvation(int plane_ID,String seatNo,String name);
}
