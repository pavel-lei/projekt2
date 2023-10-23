package cz.itnetwork.controller;

import cz.itnetwork.dto.PersonDTO;
import cz.itnetwork.dto.PojisteniDTO;
import cz.itnetwork.entity.PojisteniEntity;
import cz.itnetwork.service.PersonService;
import cz.itnetwork.service.PojisteniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PersonController {
    @Autowired
    private PersonService personService;
    @Autowired
    private PojisteniService pojisteniService;

    @PostMapping({"/osoba","/osoba/"})
    public PersonDTO addPerson(@RequestBody PersonDTO personDTO){return personService.addPerson(personDTO);}

    @DeleteMapping("/osoba/{personId}")
    public PersonDTO deletePerson(@PathVariable Long personId){
        System.out.println("mažu id: "+personId);
        return personService.deletePerson(personId);}

    @GetMapping({"/detail", "/home"})
    public List<PersonDTO> getPersons(){return personService.getPeople(20);}

    @GetMapping("/detail/{personId}")
    public PersonDTO getPersonById(@PathVariable Long personId){return personService.getPerson(personId);}

    @PostMapping("/pojisteni")
    public PojisteniDTO addPojisteni(@RequestBody PojisteniDTO pojisteniDTO){
        return pojisteniService.addPojisteni(pojisteniDTO);
    }
    @GetMapping("/pojisteni/{personId}")
    public List<PojisteniDTO> getPojisteni(@PathVariable Long personId){
        return pojisteniService.getPojisteni(personId);
    }
    @PutMapping("/osoba/{personId}")
    public PersonDTO editPerson(@PathVariable Long personId, @RequestBody PersonDTO personDTO){
        return personService.editPerson(personDTO, personId);}

    @GetMapping("/detail/pojisteni/{pojisteniId}")
    public PojisteniDTO getDetailPojisteni(@PathVariable Long pojisteniId){
        return pojisteniService.getById(pojisteniId);}
}