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
import com.rococo.global.dto.grocery.PassengerDto;
import com.rococo.global.service.grocery.GetPassengerService;

@SuppressWarnings("serial")
@ParentPackage("showcase")
@Namespace("/airline")
@InterceptorRefs({
	@InterceptorRef(value="json", params={"contentType", "application/json"}),
  @InterceptorRef("jsonValidationWorkflowStack")
})
@Results({
	@Result(name=ActionSupport.SUCCESS, type="json", params={"includeProperties", "*"}),
	@Result(name=ActionSupport.INPUT,  type="json", params={"includeProperties", "*"})
	})

public class GetAction extends ActionSupport {
	static Logger log = Logger.getLogger(GetAction.class.getName());
	@Autowired
	@Qualifier("getPassengerService")
	private GetPassengerService getService;
	
	/* object for json */
	private List<PassengerDto> Passengers;
			
	@Action(value="/searchAllPassengers")
	public String execute() throws Exception{
		log.debug("GetListAction called.");
		Passengers = getService.searchAllPassengers();
		
		return SUCCESS;
	}
	public List<PassengerDto> getPassengers() {
		return this.Passengers;
	}
	/**
	 * @param groceries the groceries to set
	 */
	public void setPassengers(List<PassengerDto> PassengerList) {
		this. Passengers =  PassengerList;
	}	
}
