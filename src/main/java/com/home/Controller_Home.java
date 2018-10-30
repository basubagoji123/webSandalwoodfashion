package com.home;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class Controller_Home {
	
	@RequestMapping("/test")
	public String Test() {
		
		return "Home Test Successfully!!!!!!!";
	}
}
