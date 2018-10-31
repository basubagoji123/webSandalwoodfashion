package com.portal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/portal")
public class Controller_Portal {

	@RequestMapping("/test")
	public String Test() {
		
		return "Portal Test Successfully!";
	}
	
	@RequestMapping("/test-html")
	public ModelAndView Test(ModelAndView modelAndView) {
		modelAndView.setViewName("portal/test");
		return modelAndView;
	}
}
