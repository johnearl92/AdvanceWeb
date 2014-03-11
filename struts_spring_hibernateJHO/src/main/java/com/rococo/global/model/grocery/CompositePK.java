package com.rococo.global.model.grocery;

import java.io.Serializable;

@SuppressWarnings("serial")
public class CompositePK implements Serializable{
	
	private int passenger_id;
    private int plane_id;

    /*
	 * @return passenger_id
	 */
    public int getPassengerId() {
        return passenger_id;
    }

    /*
	 * @param id item pId
	 */
    public void setPassengerId(int pId) {
    	passenger_id = pId;
    }
    
    /*
	 * @return plane_id
	 */
    public int getPlaneId() {
        return plane_id;
    }

    /*
	 * @param id item pId
	 */
    public void setPlaneId(int pId) {
    	plane_id = pId;
    }
}
