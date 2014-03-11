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
import com.rococo.global.service.grocery.DeleteService;
import com.rococo.global.service.grocery.GetService;
import com.rococo.global.service.grocery.GetServiceImpl;
import com.rococo.global.service.grocery.UpdateService;
import com.rococo.global.service.grocery.UpdateServiceImpl;
import com.rococo.global.util.GroceryUtils;

@SuppressWarnings("serial")
@ParentPackage("showcase")
@Namespace("/grocery")
@InterceptorRefs({
	@InterceptorRef(value="json", params={"contentType", "application/json"}),
  @InterceptorRef("jsonValidationWorkflowStack")
})
@Results({
	@Result(name=ActionSupport.SUCCESS, type="json", params={"includeProperties", "*"}),
	@Result(name=ActionSupport.INPUT,  type="json", params={"includeProperties", "*"})
	})
/**
 * Action class that handles update events.
 * @author Eldon Ivan
 *
 */
public class UpdateAction extends ActionSupport{

	/*Logging */
	static Logger log = Logger.getLogger(UpdateAction.class.getName());
	
	/* the item id */
	private int id;
	
	/* the date associated to the item */
	private String itemName;
	
	/* status 0 =fail, 1 =success */
	private int status = 0;
	
	/* object for json */
	private List<GroceryDto> groceries;

	@Autowired
	@Qualifier("updateService")
	private UpdateService service;
	

	@Autowired
	@Qualifier("getService")
	private GetService getService;
	
	@Action(value="/update")
	public String execute() throws Exception{
		log.debug("UpdateAction called.");
		service.updateItemName(id, itemName);
		groceries = getService.get();
		groceries = GroceryUtils.accordify(GroceryGlobalConstants.UPDATE, id, null,false, groceries);
		status =1;		
		return SUCCESS;
	}
	
	/**
	 * Validation.
	 * 1. itemName should not be null.
	 */
	public void validate(){			
		if (null == itemName || "".equals(itemName.trim())) {			
			addFieldError("id", "Name is required");			
		}		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
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
