/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.model.grocery;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;

/**
 * @author Anthony Encarnacion - Hibernate Integration
 */

@SuppressWarnings("serial")
@Entity
@Table(name = "t_item")
public class GroceryModel implements Serializable{

    @Id
    @GeneratedValue
    @Column(name="ID")
    private int id;
    
    @Column(name="date")
    private Date date;
    
    @Column(name="status")
    private boolean status;
    
    @Column(name="name")
    private String name;

    /**
     * @return item id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id item id
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return date of grocery
     */
    public Date getItemDate() {
        return date;
    }

    /**
     * @param date date of grocery
     */
    public void setItemDate(Date itemDate) {
        this.date = itemDate;
    }

    /**
     * @return status of item Purchased or Not
     */
    public boolean isStatus() {
        return status;
    }

    /**
     * @param status if item is purchased or not
     */
    public void setStatus(boolean status) {
        this.status = status;
    }

    /**
     * @return name of the item
     */
    public String getName() {
        return name;
    }

    /**
     * @param name of the item
     */
    public void setName(String name) {
        this.name = name;
    }
}
