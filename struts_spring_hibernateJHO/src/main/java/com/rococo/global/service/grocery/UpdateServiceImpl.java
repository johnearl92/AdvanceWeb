/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.service.grocery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.rococo.global.dao.grocery.GroceryDao;
import com.rococo.global.model.grocery.GroceryModel;

/**
 * Implementation class for Update Service
 * @author Eldon Ivan
 *
 */
public class UpdateServiceImpl implements UpdateService {

	/* the dao */
    @Autowired
    @Qualifier("groceryDao")
    private GroceryDao dao;
	
	/**
	 * Update the Item's Name.
	 */
	public int updateItemName(int id, String itemName) throws Exception {
		GroceryModel model = dao.getByID(id);
		model.setName(itemName);
		return dao.updateGrocery(model);

	}

	/**
	 * Update the Item's Status (Checkbox)
	 */
	public int updateStatus(int id) throws Exception {		
		GroceryModel model = dao.getByID(id);
		model.setStatus(!model.isStatus());
		return dao.updateGrocery(model);
	}	
}
