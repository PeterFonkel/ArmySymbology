package com.peterfonkel.armyIconsApp.rest;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@RepositoryRestController
@RequestMapping(path = "/symbols/search")
@CrossOrigin
public class SymbolController {

}
