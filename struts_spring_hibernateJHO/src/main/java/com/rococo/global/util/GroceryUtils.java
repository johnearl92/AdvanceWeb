/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.util;

import static com.rococo.global.constants.grocery.GroceryGlobalConstants.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.rococo.global.dto.grocery.GroceryDto;

/**
 * Utility Class for groceries
 * @author Eldon Ivan
 *
 */
public class GroceryUtils {

	/**
	 * Convert Date to String with MM/dd/yyyy format.
	 * @param date
	 * @return
	 */
	public static String dateToString(Date date){
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");
		return sdf.format(date);
	}
	
	/**
	 * Convert String to Date with MM/dd/yyyy format.
	 * @param strDate
	 * @return
	 * @throws ParseException
	 */
	public static Date stringToDate(String strDate) throws ParseException{
		Date date = new SimpleDateFormat("MM/dd/yyyy").parse(strDate);
		return date;
	}
	
	/**
	 * Convert date to date with MM/dd/yyyy format.
	 * @param date
	 * @return
	 * @throws ParseException
	 */
	public static Date prettyDate(Date date) throws ParseException{
		String prettyDate = GroceryUtils.dateToString(date);
		return GroceryUtils.stringToDate(prettyDate);
	}
	
	/**
	 * Covert string to string date with MM/dd/yyyy format.
	 * @param date
	 * @return
	 * @throws ParseException
	 */
	public static String prettyDate(String date) throws ParseException{
		return GroceryUtils.dateToString(GroceryUtils.stringToDate(date));
	}
	
	/**
	 * Set behavior of accordion based on screen.
	 * @param screen
	 * @param id
	 * @param date
	 * @param editable
	 * @param groceries
	 * @return
	 */
	public static List<GroceryDto> accordify(int screen, Integer id, String date, boolean editable, List<GroceryDto> groceries){
		
		switch(screen){
		case ADD:
			for(GroceryDto dto : groceries){
				if(date.equalsIgnoreCase(dto.getDate())){
					dto.setIsOpen(true);
					groceries.set(groceries.indexOf(dto), dto);
					break;
				}
			}
			break;
		case UPDATE:
			boolean updated =false;
			for(GroceryDto dto : groceries){
				List<Map<String,Object>> items = dto.getItems();
				for(Map<String,Object> item : items){
					if(id == (Integer)item.get("id")){
						dto.setIsOpen(true);
						item.put("editable",editable);
						items.set(items.indexOf(item), item);
						dto.setItems(items);
						groceries.set(groceries.indexOf(dto), dto);
						updated = true;
						break;
					}
				}
				if(updated){
					break;
				}
			}
			break;
		case DELETE:
			boolean deleted = false;
			for(GroceryDto dto : groceries){
				if(date.equalsIgnoreCase(dto.getDate())){
					dto.setIsOpen(true);
					groceries.set(groceries.indexOf(dto), dto);
					deleted = true;
					break;
				}
			}
			if(deleted){
				break;
			}
		default: // also for list
			if(groceries.size()>0){
				groceries.get(0).setIsOpen(true);
			}
		}
		return groceries;
	}
	
	/**
	 * Utility to check if the date exists.
	 * @param groceries
	 * @param date
	 * @return
	 */
	public static boolean isDateFound(List<GroceryDto> groceries, Date date){
		for(GroceryDto dto : groceries){
			if(GroceryUtils.dateToString(date).equals(dto.getDate())){
				return true;
			}
		}
		return false;
	}
}