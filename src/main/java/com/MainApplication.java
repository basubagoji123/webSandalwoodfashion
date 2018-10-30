package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@EntityScan("com")
@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan(basePackages ="com" , lazyInit=true)
public class MainApplication extends SpringBootServletInitializer  {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(MainApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(MainApplication.class);
	}

}