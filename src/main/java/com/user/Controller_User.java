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
	
	@GetMapping("/user_tshirts")
	public ModelAndView userTshirts(ModelAndView modelAndView){
		modelAndView.setViewName("user/user_tshirts");
		return modelAndView;
	}
	
	@GetMapping("/item_description")
	public ModelAndView itemDescription(ModelAndView modelAndView){
		modelAndView.setViewName("user/item_description");
		return modelAndView;
	}
	
	@GetMapping("/mens_shirts")
	public ModelAndView mens_Shirts(ModelAndView modelAndView){
		modelAndView.setViewName("user/mens_shirts");
		return modelAndView;
	}
	
	@GetMapping("/mens_tshirts")
	public ModelAndView mens_Tshirts(ModelAndView modelAndView){
		modelAndView.setViewName("user/mens_tshirts");
		return modelAndView;
	}
	
	@GetMapping("/mens_formals")
	public ModelAndView mensFormals(ModelAndView modelAndView){
		modelAndView.setViewName("user/mens_formals");
		return modelAndView;
	}
	
	@GetMapping("/mens_casualwears")
	public ModelAndView mensCasualwears(ModelAndView modelAndView){
		modelAndView.setViewName("user/mens_casualwears");
		return modelAndView;
	}
	
	@GetMapping("/mens_jeans")
	public ModelAndView mensJeans(ModelAndView modelAndView){
		modelAndView.setViewName("user/mens_jeans");
		return modelAndView;
	}
	
	@GetMapping("/womens_clothing")
	public ModelAndView womensClothing(ModelAndView modelAndView){
		modelAndView.setViewName("user/womens_clothing");
		return modelAndView;
	}
	
	@GetMapping("/womens_westrenwears")
	public ModelAndView womenWestrenwears(ModelAndView modelAndView){
		modelAndView.setViewName("user/womens_westrenwears");
		return modelAndView;
	}
	
	@GetMapping("/womens_ethnicwears")
	public ModelAndView womensEthnicwears(ModelAndView modelAndView){
		modelAndView.setViewName("user/womens_ethnicwears");
		return modelAndView;
	}
	
	@GetMapping("/womens_lingerieandnightwears")
	public ModelAndView womensLingerieandnightwears(ModelAndView modelAndView){
		modelAndView.setViewName("user/womens_lingerieandnightwears");
		return modelAndView;
	}
	
	@GetMapping("/womens_topbrands")
	public ModelAndView womensTopbrands(ModelAndView modelAndView){
		modelAndView.setViewName("user/womens_topbrands");
		return modelAndView;
	}
}
