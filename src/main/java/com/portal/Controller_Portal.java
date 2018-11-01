package com.portal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/portal")
public class Controller_Portal {

	@RequestMapping("/test")
	public String test() {
		
		return "Portal Test Successfully!";
	}
	
	@GetMapping("/home")
	public ModelAndView home(ModelAndView modelAndView ) {
		modelAndView.setViewName("portal/home");
		return modelAndView;
	}
	
}
