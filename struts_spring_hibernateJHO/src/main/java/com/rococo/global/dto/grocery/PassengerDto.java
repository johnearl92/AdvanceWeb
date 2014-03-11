package com.rococo.global.dto.grocery;

import java.util.List;
import java.util.Map;

public class PassengerDto {
	/**
	 * Default Constructor.
	 */
	public PassengerDto() {
		
	}
	
	private int id;
	private String firstname;
	private String middlename;
	private String lastname;
	private String birthdate;
	private String address;
	private String email;
	private String contactno;
	private String gender;
	
	public int getId()
	{
		return this.id;
	}
	
	public void setId(int Id)
	{
		this.id=Id;
	}
	
	public String getFirstname()
	{
		return this.firstname;
	}
	
	public void setFirstname(String name)
	{
		this.firstname=name;
	}
	
	public String getMiddlename()
	{
		return this.middlename;
	}
	
	public void setMiddlename(String name)
	{
		this.middlename=name;
	}
	
	public String getLastname()
	{
		return this.lastname;
	}
	
	public void setLastname(String name)
	{
		this.lastname=name;
	}
	
	public String getBirthdate()
	{
		return this.birthdate;
	}
	
	
	public void setBirthdate(String bdate)
	{
		this.birthdate=bdate;
	}
	
	public String getContactNo()
	{
		return this.contactno;
	}
	
	public void setContactNo(String cnumber)
	{
		this.contactno=cnumber;
	}
	
	public String getAddress()
	{
		return this.address;
	}
	
	public void setAddress(String addr)
	{
		this.address=addr;
	}
	
	public String getEmail()
	{
		return this.email;
	}
	
	public void setEmail(String em)
	{
		this.email=em;
	}
	
	public String getGender()
	{
		return this.gender;
	}
	
	public void setGender(String gender)
	{
		this.gender=gender;
	}
}
