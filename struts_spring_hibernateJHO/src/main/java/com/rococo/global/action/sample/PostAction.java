/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.action.sample;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.InterceptorRefs;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionSupport;
import com.rococo.global.constants.sample.SampleGlobalConstants;
import com.rococo.global.model.sample.SampleSvModel;

@SuppressWarnings("serial")
@ParentPackage("showcase")
@Namespace("/sample")
@InterceptorRefs({
	@InterceptorRef(value="json", params={"contentType", "application/json"}),
	@InterceptorRef("jsonValidationWorkflowStack")
})
@Results({
	@Result(name=SampleGlobalConstants.REDIRECT_KEY_LIST,
				type="redirect",
				location=SampleGlobalConstants.REDIRECT_PATH_LIST)
})
public class PostAction extends ActionSupport implements SessionAware {


	/** Date of the item to post. */
	private String date;

	/** Message of the item to post. */
	private String message;

	/** Creator of the item to post. */
	private String createdBy;

	/** Holds the current instance of the session. */
	private Map<String, Object> session;


	/**
	 * Receives the current session instance of the user from the Struts framework.
	 * @param arg0 current user session instance
	 */
	public void setSession(Map<String, Object> arg0) {
		this.session = arg0;
	}


	/**
	 * Entry point to the current action class.
	 * @return string result for struts mapping.
	 */
	@SuppressWarnings("unchecked")
	public String execute() {
		// for demo purposes, store the current parameters to an object, then store to session.
		SampleSvModel sampleSvModel = new SampleSvModel(this.date, this.message, this.createdBy);
		Object sampleList =
			this.session.get(SampleGlobalConstants.SESSION_KEY_TMP_HOLDER);
		if (sampleList == null) {
			sampleList = new ArrayList<SampleSvModel>();
		}
		((List<SampleSvModel>)sampleList).add(sampleSvModel);
		this.session.put(SampleGlobalConstants.SESSION_KEY_TMP_HOLDER, sampleList);

		/*
		 * call to a service layer component should be somewhere around here.
		 */

		return SampleGlobalConstants.REDIRECT_KEY_LIST;
	}


	/**
	 * Returns the current value of date.
	 * @return the date
	 */
	public String getDate() {
		return date;
	}

	/**
	 * Sets a new value to date with date value.
	 * @param date the date to set
	 */
	public void setDate(String date) {
		this.date = date;
	}

	/**
	 * Returns the current value of message.
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * Sets a new value to message with message value.
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * Returns the current value of createdBy.
	 * @return the createdBy
	 */
	public String getCreatedBy() {
		return createdBy;
	}

	/**
	 * Sets a new value to createdBy with createdBy value.
	 * @param createdBy the createdBy to set
	 */
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

}
