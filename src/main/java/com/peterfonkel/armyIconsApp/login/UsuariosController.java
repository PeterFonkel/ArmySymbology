package com.peterfonkel.armyIconsApp.login;

import java.util.Optional;


import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.google.auth.oauth2.JwtProvider;
import com.peterfonkel.armyIconsApp.login.dto.TokenDto;
import com.peterfonkel.armyIconsApp.login.roles.Rol;
import com.peterfonkel.armyIconsApp.login.roles.RolService;
import com.peterfonkel.armyIconsApp.login.usuarios.UsuarioService;
import com.peterfonkel.armyIconsApp.login.usuarios.entidades.Usuario;


/**
 * Controlador de gestion de usuarios. Reservado ADMIN
 * 
 * @author albal
 *
 */
@PreAuthorize("authenticated")
@RestController
@RequestMapping(path = "/api/usuarios/search")
@CrossOrigin
public class UsuariosController {

	@Value("${secretPsw}")
	String secretPsw;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	UsuarioService usuarioService;

	@Autowired
	RolService rolService;

	private final static Logger logger = LoggerFactory.getLogger(JwtProvider.class);

	public String getSecretPsw() {
		return secretPsw;
	}

	public PasswordEncoder getPasswordEncoder() {
		return passwordEncoder;
	}

	public RolService getRolService() {
		return rolService;
	}

	public UsuarioService getUsuarioService() {
		return usuarioService;
	}

	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PostMapping("/nuevousuario")
	private Usuario saveNuevoUsuario(@RequestBody Usuario usuario) {
		logger.info("Salvando nuevo Usuario: " + usuario);
		Usuario usuarioNuevo = new Usuario(usuario.getEmail(), getPasswordEncoder().encode(getSecretPsw()));
		Rol rol = getRolService().getByRolNombre(usuario.getRol().getRolNombre()).get();
		logger.info("Asignando el rol: ", rol);
		usuarioNuevo.getRoles().add(rol);
		return getUsuarioService().save(usuarioNuevo);
	}
	
	@GetMapping("/getusuariobyemail")
	private Optional<Usuario> findByEmail(@RequestParam String email) {
		System.out.println("En getById controller: " + email);
		Usuario usuario = getUsuarioService().getByEmail(email).get();
		return Optional.of(usuario);
	}

}
