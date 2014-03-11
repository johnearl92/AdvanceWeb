/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.action.sample;

import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;

import com.opensymphony.xwork2.ActionSupport;
import com.rococo.global.constants.sample.SampleGlobalConstants;

@SuppressWarnings("serial")
@Namespace("/sample")
@Results({
    @Result(name=ActionSupport.SUCCESS,
    			type="redirect",
    			location=SampleGlobalConstants.REDIRECT_PATH_DEFAULT)
})
public class IndexAction extends ActionSupport {

}
