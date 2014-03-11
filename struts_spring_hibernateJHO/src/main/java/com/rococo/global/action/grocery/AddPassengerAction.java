package com.rococo.global.action.grocery;

import java.util.List;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.InterceptorRefs;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.jfree.util.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.opensymphony.xwork2.ActionSupport;
import com.rococo.global.dto.grocery.PassengerDto;
import com.rococo.global.service.grocery.AddPassengerService;

@SuppressWarnings("serial")
@ParentPackage("showcase")
@Namespace("/airline")
@InterceptorRefs({
	@InterceptorRef(value="json", params={"contentType", "application/json"}),
    @InterceptorRef("jsonValidationWorkflowStack")
})

@Results({
	@Result(name=ActionSupport.INPUT,  type="json", params={"includeProperties", "*"}),
	@Result(name=ActionSupport.SUCCESS, type="json", params={"includeProperties", "*"})
	})

public class AddPassengerAction extends ActionSupport {
	private String firstname, middlename, lastname, birthdate, gender, address, email, contactno;

	//private List<PassengerDto> passengers;
	
	private int status=0;
	
	@Autowired
	@Qualifier("addPassengerService")
	private AddPassengerService addPassengerService;
	
	@Action(value="/addPassenger")
	public String execute() throws Exception{
		Log.debug("AddAction called.");
		if(!hasFieldErrors()){
			addPassengerService.addPassenger(getFirstname(), getLastname(), getMiddlename(), getBirthdate(), getContactno(), getAddress(), getGender(), getEmail());
		}
		status=1;
		return SUCCESS;
	}
	
	/*public List<PassengerDto> getGroceries() {
		return passengers;
	}

	public void setGroceries(List<PassengerDto> groceries) {
		this.passengers = groceries;
	}*/

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getMiddlename() {
		return middlename;
	}

	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
}
