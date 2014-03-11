/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.service.grocery;

/**
 * Service for Update.
 * @author Eldon Ivan
 *
 */
public interface UpdateService {

	/**
	 * Update the item's name.
	 * @param id 
	 * @param itemName
	 * @throws Exception 
	 */
	public int updateItemName(int id, String itemName) throws Exception;
	
	/**
	 * Update the item's status (checkbox).
	 * @param id
	 * @throws Exception 
	 */
	public int updateStatus(int id) throws Exception;	
}
