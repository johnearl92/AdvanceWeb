/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.service.grocery;

import java.text.ParseException;
import java.util.Date;

/**
 * Service for Add.
 * @author Eldon Ivan
 *
 */
public interface AddService {

	/**
	 * Adds an Item.
	 * @param date
	 * @param itemName
	 * @throws ParseException 
	 */
	public int add(String date, String itemName) throws ParseException;
	
	/**
	 * Converts String to Date using the util.
	 * @param date
	 * @return
	 * @throws ParseException
	 */
	public Date getDate(String date) throws ParseException;
	
}
