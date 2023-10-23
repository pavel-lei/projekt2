package cz.itnetwork.service;

import cz.itnetwork.dto.PersonDTO;
import cz.itnetwork.dto.PojisteniDTO;
import cz.itnetwork.dto.mapper.PersonMapper;
import cz.itnetwork.entity.PersonEntity;
import cz.itnetwork.entity.PojisteniEntity;
import cz.itnetwork.entity.repository.PersonRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonServiceImpl implements PersonService{
    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private PersonMapper personMapper;
    @Override
    public PersonDTO addPerson(PersonDTO personDTO) {
        PersonEntity entity = personMapper.toEntity(personDTO);
        PersonEntity saved = personRepository.save(entity);
        return personMapper.toDTO(saved);
    }

    @Override
    public PersonDTO deletePerson(long id) {
        PersonEntity entity = personRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        PersonDTO personDTO = personMapper.toDTO(entity);
        personRepository.delete(entity);
        return personDTO;
    }

    @Override
    public PersonDTO editPerson(PersonDTO personDTO, Long id) {
        if(!personRepository.existsById(id)) throw new EntityNotFoundException("Osoba s id " + id + " nenalezena");
        PersonEntity entity = personMapper.toEntity(personDTO);
        entity.setId(id);
        PersonEntity saved = personRepository.save(entity);
        return personMapper.toDTO(saved);
    }
    @Override
    public PersonDTO getPerson(Long id) {
        PersonEntity entity = personRepository.getReferenceById(id);
        return personMapper.toDTO(entity);
    }

    @Override
    public List<PersonDTO> getPeople(int limit) {
        List<PersonEntity> entities = personRepository.getAllByIdGreaterThan(0);
        //použít entities nebo page
        Pageable pageable= PageRequest.of(0,20);
        Page<PersonEntity> page= personRepository.findAll(pageable);

        List<PersonDTO> result = new ArrayList<>();
        for (PersonEntity e: page) result.add(personMapper.toDTO(e));
        return result;
    }
}
