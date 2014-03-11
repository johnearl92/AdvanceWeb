/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.dao.grocery;

import java.util.List;

import com.rococo.global.model.grocery.GroceryModel;

/**
 * @author Anthony Encarnacion
 *
 */
public interface GroceryDao {

    /**
     * @param grocery item
     * @return integer specifying if the grocery was successfully added.
     */
    public int insertGrocery(GroceryModel grocery);
    
    /**
     * @param grocery
     * @return integer specifying if the grocery was successfully updated.
     */
    public int updateGrocery(GroceryModel grocery);
    
    /**
     * @param grocery
     * @return integer specifying if the grocery was successfully deleted.
     */
    public int deleteGrocery(GroceryModel grocery);
    
    /**
     * @return list of all groceries
     */
    public List<GroceryModel> searchAllGrocery();
    
    /**
     * @param id of the item being look out for
     * @return the model containing the ID
     */
    public GroceryModel getByID(int id) throws Exception;
    
}
