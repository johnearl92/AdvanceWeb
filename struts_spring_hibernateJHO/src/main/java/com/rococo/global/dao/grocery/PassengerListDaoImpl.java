package com.rococo.global.dao.grocery;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transaction;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.rococo.global.model.grocery.Passenger;

public class PassengerListDaoImpl extends HibernateDaoSupport implements PassengerListDao {
	
	public PassengerListDaoImpl() {
	}
	
	private Session	 session;
	/** Variable to hold Transaction data*/
	@SuppressWarnings("unused")
	private Transaction tx= null;
	
	private List<Passenger> Passengerlist = new ArrayList<Passenger>();

	@SuppressWarnings("unchecked")
	public List<Passenger> searchAllPassengers() {
		// TODO Auto-generated method stub
		try{
			session = getSessionFactory().openSession();
	                String hql="from Passenger";
	            	Query query = session.createQuery(hql);
	            	Passengerlist = query.list();
	                return Passengerlist;
		    }catch (Exception e){
			System.out.println(e.toString() + " dao layeers");
			return Passengerlist;
		    }
		//return null;
	}
	
	@Autowired
	public void bindSession(SessionFactory sessionFactory){
		setSessionFactory(sessionFactory);
	}
}
