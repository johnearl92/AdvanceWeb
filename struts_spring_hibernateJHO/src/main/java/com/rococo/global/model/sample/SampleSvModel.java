/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.model.sample;

public class SampleSvModel {

	/** Model default constructor. */
	public SampleSvModel() { }

	/**
	 * Override constructor.
	 * @param date date to set
	 * @param message message to set
	 * @param createdBy creator of the current model
	 */
	public SampleSvModel(String date, String message, String createdBy) {
		this.date = date;
		this.message = message;
		this.createdBy = createdBy;
	}

	/** Date of the item to post. */
	private String date;

	/** Message of the item to post. */
	private String message;

	/** Creator of the item to post. */
	private String createdBy;

	public String toJsonString() {
		return
			"{" +
				"date: " + this.date + "," +
				"message: " + this.message + "," +
				"createdBy: " + this.createdBy + "," +
			"}";
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
