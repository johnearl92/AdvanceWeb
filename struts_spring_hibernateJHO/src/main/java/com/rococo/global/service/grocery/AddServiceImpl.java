/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.service.grocery;

import java.text.ParseException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.rococo.global.dao.grocery.GroceryDao;
import com.rococo.global.model.grocery.GroceryModel;
import com.rococo.global.util.GroceryUtils;

/**
 * Implementation Class for AddService.
 * @author Eldon Ivan
 *
 */
public class AddServiceImpl implements AddService {

	/* the dao */
    @Autowired
    @Qualifier("groceryDao")
    private GroceryDao dao;
	
	/**
	 * Adds an Entry.
	 * @param date
	 * @param itemName
	 */
	public int add(String date, String itemName) throws ParseException {
		Date itemDate = getDate(date);
		GroceryModel model = new GroceryModel();
		model.setItemDate(itemDate);
		model.setName(itemName);
		model.setStatus(false);
		return dao.insertGrocery(model);
	}
	
	/**
	 * Calls util to cenvert String to Date.
	 * @param date
	 */
	public Date getDate(String date) throws ParseException{
		return GroceryUtils.stringToDate(date);
	}
}
