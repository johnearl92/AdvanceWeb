package com.rococo.global.dao.grocery;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.rococo.global.model.grocery.Passenger;
import com.rococo.global.model.grocery.PassengerList;
import com.rococo.global.model.grocery.Plane;

public class PlaneDaoImpl extends HibernateDaoSupport implements PlaneDao{

	public PlaneDaoImpl() {
		// TODO Auto-generated constructor stub
	}
	public List<Plane> getPlaneList() {
		// TODO Auto-generated method stub
		return getHibernateTemplate().find("from Plane");
	}

	@Autowired
	public void bindSession(SessionFactory sessionFactory){
		setSessionFactory(sessionFactory);
	}
	public void saveResrvation(int plane_ID, String seatNo, String name) {
		// TODO Auto-generated method stub
		int passenger_id = 0;
		String pName;
		List<Passenger> list = getHibernateTemplate().find("from Passenger");
		for(Passenger p:list){
			pName= p.getFirstname()+" "+p.getMiddlename()+" "+p.getLastname();
			if(pName.equals(name)){
				passenger_id = p.getPassenger_id();
				break;
			}
		}
		
		PassengerList pl = new PassengerList();
		pl.setPassenger_id(passenger_id);
		pl.setPlane_id(plane_ID);
		pl.setSeat_no(seatNo);
		getHibernateTemplate().save(pl);
		
	}
}
