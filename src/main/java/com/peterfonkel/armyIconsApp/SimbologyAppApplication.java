package com.peterfonkel.armyIconsApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;
import org.springframework.web.bind.annotation.InitBinder;

import com.peterfonkel.armyIconsApp.entities.Unit;
import com.peterfonkel.armyIconsApp.repositories.UnitDAO;

@SpringBootApplication
@ImportResource({ "classpath:config/jpa-config.xml" })
@Import({ ClaseConfiguracionJava.class })
public class SimbologyAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimbologyAppApplication.class, args);
		System.out.println("Inicio aplicacion");
	}
}
