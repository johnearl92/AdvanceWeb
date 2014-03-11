/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.action.sample;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.InterceptorRefs;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;
import org.apache.struts2.interceptor.SessionAware;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONString;
import org.json.JSONWriter;

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
	@Result(name=ActionSupport.SUCCESS, type="json", params={"includeProperties", "*"})
})
public class ListAction extends ActionSupport implements SessionAware {

	private String data;

	/**
	 * Returns the current value of data.
	 * @return the data
	 */
	public String getData() {
		return data;
	}


	/**
	 * Sets a new value to data with data value.
	 * @param data the data to set
	 */
	public void setData(String data) {
		this.data = data;
	}


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
		// for demo purposes, retrieve list from current user session.
		Object sampleList = this.session.get(SampleGlobalConstants.SESSION_KEY_TMP_HOLDER);
		if (sampleList == null) {
			sampleList = new ArrayList<SampleSvModel>();
			this.session.put(SampleGlobalConstants.SESSION_KEY_TMP_HOLDER, sampleList);
		}

		/*
		 * call to a service layer component should be somewhere around here.
		 */

		// for demo purposes, convert retrieved list to JSON
		JSONObject json = new JSONObject();
		for (SampleSvModel sampleSvModel : (List<SampleSvModel>)sampleList) {
			try {
				json.append("", sampleSvModel.toJsonString());
			} catch (JSONException e) { }
		}
		this.data = json.toString();

		return ActionSupport.SUCCESS;
	}
}
