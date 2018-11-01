package com.inventory;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/inventory")
public class Controller_Inventory {

	@RequestMapping("/test")
	public String test(){
		return "Inventory Test Successfullyy!!!";
	}
	
	@GetMapping("/item-update")
	public ModelAndView itemUpdate(ModelAndView modelAndView){
		modelAndView.setViewName("inventory/item-update");
		return modelAndView;
	}
}
