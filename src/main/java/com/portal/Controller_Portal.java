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
		
		return "Portal Test Successfully........!";
	}
	
	@GetMapping("/sample")
	public ModelAndView sample(ModelAndView modelAndView ) {
		modelAndView.setViewName("portal/sample");
		return modelAndView;
	}
	
	@GetMapping("/home")
	public ModelAndView home(ModelAndView modelAndView ) {
		modelAndView.setViewName("portal/home");
		return modelAndView;
	}
	
	@RequestMapping("/testdemo")
	public ModelAndView testdemo(ModelAndView modelAndView ) {
		modelAndView.setViewName("portal/testdemo");
		return modelAndView;
	}
	
}
