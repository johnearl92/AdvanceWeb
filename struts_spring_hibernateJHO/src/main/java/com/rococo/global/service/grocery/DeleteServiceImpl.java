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
 * Implementation Class for Delete Service.
 * @author Eldon Ivan
 *
 */
public class DeleteServiceImpl implements DeleteService {

	/* the dao */
    @Autowired
    @Qualifier("groceryDao")
    private GroceryDao dao;
	
	/**
	 * Deltes an item.
	 * @param id
	 */
	public int delete(int id) {
		GroceryModel model = new GroceryModel();
		model.setId(id);
		return dao.deleteGrocery(model);
	}
}
