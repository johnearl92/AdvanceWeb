/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.dto.grocery;

import java.util.List;
import java.util.Map;

/**
 * Basic model for a grocery list.
 * @author Eldon Ivan
 *
 */
public class GroceryDto {
	
	/**
	 * Default Constructor.
	 */
	public GroceryDto(){}
	
	
	/**
	 * Collection of items for grocery.
	 */
	private List<Map<String, Object>> items;
	
	/**
	 * Date for the items.
	 */
	private String date;
	
	/**
	 * Flag to show/hide div
	 */
	private boolean isOpen;
			
	/**
	 * Error messages.
	 */
	private String errorMessage;

	/**
	 * @return the items
	 */
	public List<Map<String, Object>> getItems() {
		return items;
	}

	/**
	 * @param items the items to set
	 */
	public void setItems(List<Map<String, Object>> items) {
		this.items = items;
	}

	/**
	 * @return the listDate
	 */
	public String getDate() {
		return date;
	}

	/**
	 * @param listDate the listDate to set
	 */
	public void setDate(String date) {
		this.date = date;
	}

	/**
	 * @return the errorMessage
	 */
	public String getErrorMessage() {
		return errorMessage;
	}

	/**
	 * @param errorMessage the errorMessage to set
	 */
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
	public boolean getIsOpen() {
		return isOpen;
	}

	public void setIsOpen(boolean isOpen) {
		this.isOpen = isOpen;
	}

	/**
	 * Add item to items.
	 * @param item
	 */
	public void addListItem(Map<String, Object> item){
		items.add(item);
	}	
}
