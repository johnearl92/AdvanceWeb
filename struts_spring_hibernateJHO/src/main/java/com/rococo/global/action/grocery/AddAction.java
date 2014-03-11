/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.action.grocery;

import java.util.List;

import org.apache.log4j.Logger;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.InterceptorRefs;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.opensymphony.xwork2.ActionSupport;
import com.rococo.global.constants.grocery.GroceryGlobalConstants;
import com.rococo.global.dto.grocery.GroceryDto;
import com.rococo.global.service.grocery.AddService;
import com.rococo.global.service.grocery.GetService;
import com.rococo.global.util.GroceryUtils;

@SuppressWarnings("serial")
@ParentPackage("showcase")
@Namespace("/grocery")
@InterceptorRefs({
	@InterceptorRef(value="json", params={"contentType", "application/json"}),
    @InterceptorRef("jsonValidationWorkflowStack")
})

@Results({
	@Result(name=ActionSupport.INPUT,  type="json", params={"includeProperties", "*"}),
	@Result(name=ActionSupport.SUCCESS, type="json", params={"includeProperties", "*"})
	})
/**
 * Action class to handle Add event
 * @author Eldon Ivan
 *
 */
public class AddAction extends ActionSupport{

	/*Logging */
	static Logger log = Logger.getLogger(AddAction.class.getName());
	
	/* name of the item */
	private String name;
	
	/* the date associated to the item */
	private String itemDate;
	
	/* status 0 =fail, 1 =success */
	private int status = 0;
	
	/* object for json */
	private List<GroceryDto> groceries;
	

	@Autowired
	@Qualifier("addService")
	private AddService addService;
	

	@Autowired
	@Qualifier("getService")
	private GetService getService;
	/**
	 * Main entry point for adding.
	 */
	@Action(value="/add")
	public String execute() throws Exception{
		log.debug("AddAction called.");
		
		if(!hasFieldErrors()){
			addService.add(itemDate, name);
			groceries = getService.get();
		}
		
		status=1;
		groceries = GroceryUtils.accordify(GroceryGlobalConstants.ADD, null, itemDate, false, groceries);
		return SUCCESS;
	}
	
	/**
	 * Validation.
	 * 1. item should not be null.
	 * 2. itemDate should be current or future.
	 */
	public void validate(){
		if (null == name || "".equals(name.trim())) {
			addFieldError("name", "Item is required");
		}
		
		if (null == itemDate){
			addFieldError("item", "Date is required");
		}
	}

	/**
	 * @return the itemName
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param itemName the itemName to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the itemDate
	 */
	public String getItemDate() {
		return itemDate;
	}

	/**
	 * @param itemDate the itemDate to set
	 */
	public void setItemDate(String itemDate) {
		this.itemDate = itemDate;
	}
		
	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	
	public List<GroceryDto> getGroceries() {
		return groceries;
	}

	public void setGroceries(List<GroceryDto> groceries) {
		this.groceries = groceries;
	}

}
