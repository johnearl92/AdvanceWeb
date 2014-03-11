/* -------------------------------------------------------------------------------- 
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Copyright (C) RococoGlobal Technologies, Inc - All Rights Reserved 2013
 * -------------------------------------------------------------------------------- */
package com.rococo.global.service.grocery;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.rococo.global.dao.grocery.GroceryDao;
import com.rococo.global.dto.grocery.GroceryDto;
import com.rococo.global.model.grocery.GroceryModel;
import com.rococo.global.util.GroceryUtils;

/**
 * Implementation Class for GetService.
 * @author Eldon Ivan
 *
 */
public class GetServiceImpl implements GetService{

	/* the dao */
    @Autowired
    @Qualifier("groceryDao")
    private GroceryDao dao;
	
    public GroceryDao getDao() {
        return dao;
    }

    public void setDao(GroceryDao dao) {
        this.dao = dao;
    }

	/**
	 * Retrieves the groceries.
	 */
	public List<GroceryDto> get() {
		List<GroceryModel> modelList = dao.searchAllGrocery();
		
		//object to return
		List<GroceryDto> groceries = new ArrayList<GroceryDto>();
		
		for(GroceryModel model : modelList){		
			if(!GroceryUtils.isDateFound(groceries, model.getItemDate())){
				//initial entry
				GroceryDto dto = new GroceryDto();
				dto.setDate(GroceryUtils.dateToString(model.getItemDate()));
				dto.setIsOpen(false);
				
				//the items inside the basket
				List<Map<String,Object>> items = new ArrayList<Map<String, Object>>();
				Map<String,Object> item = new LinkedHashMap<String, Object>();
				item.put("id", model.getId());
				item.put("itemName", model.getName());
				item.put("itemStatus", model.isStatus());
				item.put("editable", false);
				items.add(item);				
				dto.setItems(items);
				
				//finally, add it to the list.
				groceries.add(dto);
			}else{
				//an entry has been made and needs to be appended. find the date.
				for(GroceryDto oldDto : groceries){
					if(GroceryUtils.dateToString(model.getItemDate()).equals(oldDto.getDate())){
						//date found, Clone existing
						GroceryDto newDto = new GroceryDto();
						newDto.setDate(oldDto.getDate());
						newDto.setIsOpen(oldDto.getIsOpen());
						newDto.setItems(oldDto.getItems());
						
						//populate map to be appended.
						Map<String,Object> item = new LinkedHashMap<String, Object>();
						item.put("id", model.getId());
						item.put("itemName", model.getName());
						item.put("itemStatus", model.isStatus());
						item.put("editable", false);
						
						//then add to the new list.
						newDto.addListItem(item);
						
						//replace old with new
						groceries.set(groceries.indexOf(oldDto), newDto);
					}
				}
			}			
		}
		return groceries;
	}	
}
