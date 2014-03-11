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
 * Action class that handles retrieval of grocery items.
 * @author Eldon Ivan
 *
 */
public class GetListAction extends ActionSupport{
	/*Logging */
	static Logger log = Logger.getLogger(GetListAction.class.getName());
	
	@Autowired
	@Qualifier("getService")
	private GetService getService;
	/* status 0 =fail, 1 =success */
	private int status = 0;
	
	/* object for json */
	private List<GroceryDto> groceries;
			
	@Action(value="/getList")
	public String execute() throws Exception{
		log.debug("GetListAction called.");
		groceries = getService.get();
		status=1;
		groceries = GroceryUtils.accordify(GroceryGlobalConstants.LIST, null, null, false, groceries);
		return SUCCESS;
	}

	public int getStatus() {
		return status;
	}



	public void setStatus(int status) {
		this.status = status;
	}
	
	/**
	 * @return the groceries
	 */
	public List<GroceryDto> getGroceries() {
		return groceries;
	}

	/**
	 * @param groceries the groceries to set
	 */
	public void setGroceries(List<GroceryDto> groceries) {
		this.groceries = groceries;
	}	
}
