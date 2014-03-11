package com.rococo.global.dao.grocery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.rococo.global.model.grocery.Passenger;

public class PassengerDaoImpl extends HibernateDaoSupport implements PassengerDao {
	
	private Session	session;
	private Transaction tx = null;
	public PassengerDaoImpl() {
	}
	
	public int insertPassenger(Passenger passenger) {
		try{
			session = getSessionFactory().openSession();
			tx = session.beginTransaction();
	        session.save(passenger);
		}catch (Exception e){
			tx.rollback();
			System.out.println(e.toString());
			return -1;
		}
		tx.commit();
		return 1;
	}
	
	@Autowired
	public void bindSession(SessionFactory sessionFactory){
		setSessionFactory(sessionFactory);
	}
}
