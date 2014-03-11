/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.service.grocery;

import java.util.List;

import com.rococo.global.dto.grocery.GroceryDto;

/**
 * Service for Get.
 * @author Eldon Ivan
 *
 */
public interface GetService {

	/**
	 * Retrieves List of groceries.
	 * @return
	 */
	public List<GroceryDto> get();
	
}
