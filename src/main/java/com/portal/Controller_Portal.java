package com.portal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/portal")
public class Controller_Portal {

	@RequestMapping("/test")
	public String Test() {
		
		return "Portal Test Successfully!!!!!!!";
	}
}
