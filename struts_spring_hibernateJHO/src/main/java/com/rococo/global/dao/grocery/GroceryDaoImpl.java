/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.dao.grocery;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.rococo.global.model.grocery.GroceryModel;

/**
 * @author Anthoyn Encarnacion
 *
 */
public class GroceryDaoImpl extends HibernateDaoSupport implements GroceryDao{

	public GroceryDaoImpl() {
	}

	/** Variable to hold Hibernate Session data*/
	private Session	 session;
	/** Variable to hold Transaction data*/
	private Transaction tx= null;

	/** Variable to hold the list of groceries*/
	private List<GroceryModel> groceryList = new ArrayList<GroceryModel>();
	
	/**
	 * @param grocery item
	 * @return integer specifying if the grocery was successfully added	
	 */
	public int insertGrocery(GroceryModel grocery) {
	    try{
		session = getSessionFactory().openSession();
                tx = session.beginTransaction();
                session.save(grocery);

	    }catch (Exception e){
		tx.rollback();
		System.out.println(e.toString());
		return -1;
	    }
	    	tx.commit();
	    	return 0;
	}


        /**
        * @param grocery
        * @return integer specifying if the grocery was successfully updated.
        */
        public int updateGrocery(GroceryModel grocery) {
            try{
		session = getSessionFactory().openSession();
                tx = session.beginTransaction();
                session.update(grocery);
	    }catch (Exception e){
		tx.rollback();
		return -1;
	    }
	    	tx.commit();
	    	return 0;
        }
    
    
        /**
         * @param grocery
         * @return integer specifying if the grocery was successfully deleted.
         */
        public int deleteGrocery(GroceryModel grocery) {
            try{

		session = getSessionFactory().openSession();
                tx = session.beginTransaction();
                session.delete(grocery);
	    }catch (Exception e){
		tx.rollback();
		return -1;
	    }
	    	tx.commit();
	    	return 0;
        }
    
        /**
         * @return list of all groceries
         */    
	@SuppressWarnings("unchecked")
	public List<GroceryModel> searchAllGrocery() {
            
            try{
		session = getSessionFactory().openSession();
                String hql="from GroceryModel G ORDER BY G.date DESC";
            	Query query = session.createQuery(hql);
            	groceryList = query.list();
                return groceryList;
	    }catch (Exception e){
		System.out.println(e.toString() + " dao layeers");
		return groceryList;
	    }
        }
	
	 /**
	 * @param id of the item being look out for
	 * @return the model containing the ID
	 */
	 public GroceryModel getByID(int id) throws Exception {
		session = getSessionFactory().openSession();
	         GroceryModel model = new GroceryModel();
	         model = (GroceryModel) session.get(GroceryModel.class,id);
	                return model;
	 }

	@Autowired
	public void bindSession(SessionFactory sessionFactory){
		setSessionFactory(sessionFactory);
	}
}
