package com.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/user")
public class Controller_User {
	
	@RequestMapping("/test")
	public String test(){
		return "User test successfully!!";
	}

	@GetMapping("/user-update")
	public ModelAndView userUpdate(ModelAndView modelAndView){
		modelAndView.setViewName("user/user-update");
		return modelAndView;
	}

}
