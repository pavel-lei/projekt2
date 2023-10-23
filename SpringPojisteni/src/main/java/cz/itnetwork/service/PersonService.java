package cz.itnetwork.service;

import cz.itnetwork.dto.PersonDTO;
import cz.itnetwork.dto.PojisteniDTO;

import java.util.List;

public interface PersonService {
    PersonDTO addPerson(PersonDTO personDTO);
    PersonDTO getPerson(Long id);
    List<PersonDTO> getPeople(int limit);
    PersonDTO editPerson(PersonDTO personDTO, Long id);
    PersonDTO deletePerson(long id);
}
