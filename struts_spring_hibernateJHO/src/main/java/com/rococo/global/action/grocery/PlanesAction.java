package com.rococo.global.action.grocery;

/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */


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
import com.rococo.global.dto.grocery.PlaneDto;
import com.rococo.global.service.grocery.PlaneService;

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
/**
 * Action class that handles retrieval of grocery items.
 * @author Eldon Ivan
 *
 */
public class PlanesAction extends ActionSupport{
	/*Logging */
	static Logger log = Logger.getLogger(GetListAction.class.getName());
	
	@Autowired
	@Qualifier("planeService")
	PlaneService serbisyo;
	
	private List<PlaneDto> Planes;
	private int status;
	private int planeID;
	private String seatNo;
	private String name;
	

	@Action(value="/getPlanes")
	public String execute() throws Exception{
		log.debug("GetListAction called.");
		Planes = serbisyo.getPlanes();
		status = 1;
		System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+Planes.get(0).getPlaneName());
		return SUCCESS;
	}
	
	@Action(value="/saveReservation")
	public String saveReservation() throws Exception{
		log.debug("GetListAction called.");
		serbisyo.saveReservation(planeID, seatNo, name);
		status = 1;;
		return SUCCESS;
	}
	
	

	public int getPlaneID() {
		return planeID;
	}

	public void setPlaneID(int planeID) {
		this.planeID = planeID;
	}

	public String getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(String seatNo) {
		this.seatNo = seatNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<PlaneDto> getPlanes() {
		return Planes;
	}

	public void setPlanes(List<PlaneDto> planes) {
		Planes = planes;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	
}

