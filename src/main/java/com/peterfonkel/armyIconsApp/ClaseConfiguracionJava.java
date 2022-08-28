package com.peterfonkel.armyIconsApp;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.peterfonkel.armyIconsApp.login.jwt.JwtProvider;
import com.peterfonkel.armyIconsApp.login.roles.Rol;
import com.peterfonkel.armyIconsApp.login.roles.RolDAO;
import com.peterfonkel.armyIconsApp.login.roles.enums.RolNombre;
import com.peterfonkel.armyIconsApp.login.usuarios.UsuarioDAO;
import com.peterfonkel.armyIconsApp.login.usuarios.entidades.Usuario;


@Configuration
@ComponentScan("peterfonkel")
public class ClaseConfiguracionJava {

	private final static Logger logger = LoggerFactory.getLogger(JwtProvider.class);

	@Autowired
	RolDAO rolDAO;

	@Autowired
	UsuarioDAO usuarioDAO;

	@Value("${secretPsw}")
	String secretPsw;

	@Value("${correoAdmin}")
	String correoAdmin;
	
	@Value("${correoUser}")
	String correoUser;

	@Autowired
	PasswordEncoder passwordEncoder;
	


	@Bean
	public void inicializarBD() {
		logger.info("Iniciando la BD, cargando Roles iniciales y ADMIN");
		/*
		 * cargo los roles de enum.Rolnombre
		 */
		for (RolNombre rol : RolNombre.values()) {
			Rol rolNuevo = new Rol(rol);
			
			if (!rolDAO.existsByRolNombre(rol)) {
				System.out.println("ROLNUEVO: " + rolNuevo);
				rolDAO.save(rolNuevo);
			}
		}

		/*
		 * cargo el usuario administrador si no existe en la BD
		 */
		if (!usuarioDAO.existsByEmail(correoAdmin)) {
			Usuario usuarioAdmin = new Usuario(correoAdmin, passwordEncoder.encode(secretPsw));
			//usuarioAdmin.setNombre("Peter Fonkel");
			Rol rolAdmin = rolDAO.findByRolNombre(RolNombre.ROLE_ADMIN).get();
			Set<Rol> roles = new HashSet<>();
			roles.add(rolAdmin);
			usuarioAdmin.agregarRoles(roles);
			usuarioDAO.save(usuarioAdmin);
		}
		if (!usuarioDAO.existsByEmail(correoUser)) {
			Usuario usuarioUser = new Usuario(correoUser, passwordEncoder.encode(secretPsw));
			//usuarioAdmin.setNombre("Peter Fonkel");
			Rol rolUser = rolDAO.findByRolNombre(RolNombre.ROLE_USER).get();
			Set<Rol> roles = new HashSet<>();
			roles.add(rolUser);
			usuarioUser.agregarRoles(roles);
			usuarioDAO.save(usuarioUser);
		}
	}

	@Bean
	CorsFilter corsFilter() {
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		final CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(false);
		config.setAllowedOrigins(Collections.singletonList("*"));
		config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization"));
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
		source.registerCorsConfiguration("/**", config);

		return new CorsFilter(source);
	}
	

}