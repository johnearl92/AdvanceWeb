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
import com.rococo.global.service.grocery.DeleteService;
import com.rococo.global.service.grocery.DeleteServiceImpl;
import com.rococo.global.service.grocery.GetService;
import com.rococo.global.service.grocery.GetServiceImpl;
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
 * Action class that handles delete event.
 * @author Eldon Ivan
 *
 */
public class DeleteAction extends ActionSupport{
	
	/*Logging */
	static Logger log = Logger.getLogger(DeleteAction.class.getName());
	
	/* the item name */
	private int id;
	
	/* the date the item is associated*/
	private String itemDate;
	
	/* status 0 =fail, 1 =success */
	private int status = 0;
	
	/* object for json */
	private List<GroceryDto> groceries;

	@Autowired
	@Qualifier("deleteService")
	private DeleteService deleteService;

	@Autowired
	@Qualifier("getService")
	private GetService getService;
	@Action(value="/delete")
	public String execute() throws Exception{
		log.debug("DeleteAction called.");
		deleteService.delete(id);
		groceries = getService.get();
		
		status =1;
		groceries = GroceryUtils.accordify(GroceryGlobalConstants.DELETE, id, itemDate, false, groceries);
		return SUCCESS;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}	
	
	public String getItemDate() {
		return itemDate;
	}

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
