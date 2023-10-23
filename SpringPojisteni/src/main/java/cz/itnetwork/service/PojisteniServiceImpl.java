package cz.itnetwork.service;

import cz.itnetwork.dto.PojisteniDTO;
import cz.itnetwork.dto.mapper.PersonMapper;
import cz.itnetwork.dto.mapper.PojisteniMapper;
import cz.itnetwork.entity.PojisteniEntity;
import cz.itnetwork.entity.repository.PersonRepository;
import cz.itnetwork.entity.repository.PojisteniRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PojisteniServiceImpl implements  PojisteniService{
    @Autowired
    PojisteniRepository pojisteniRepository;
    @Autowired
    PojisteniMapper pojisteniMapper;
    @Autowired
    PersonRepository personRepository;

    @Override
    public List<PojisteniDTO> getPojisteni(long id) {
        List<PojisteniDTO> dtos = new ArrayList<>();
        List<PojisteniEntity> entities = pojisteniRepository.getAllByOsoba(personRepository.getReferenceById(id));
        for (PojisteniEntity entity: entities) dtos.add(pojisteniMapper.toDTO(entity));
        return dtos;
    }

    @Override
    public PojisteniDTO getById(long pojisteniId) {
        return pojisteniMapper.toDTO(pojisteniRepository.getReferenceById(pojisteniId));}

    @Override
    public List<PojisteniDTO> getAllPojisteni() {
        List<PojisteniDTO> result=new ArrayList<>();
        for (PojisteniEntity entity: pojisteniRepository.findAll()) result.add(pojisteniMapper.toDTO(entity));
        return result;
    }

    @Override
    public PojisteniDTO addPojisteni(PojisteniDTO pojisteniDTO) {
        PojisteniEntity pojisteni = pojisteniMapper.toEntity(pojisteniDTO);

        mapPojisteniToPerson(pojisteni, pojisteniDTO);

        PojisteniEntity saved = pojisteniRepository.save(pojisteni);
        return pojisteniMapper.toDTO(saved);
    }

    private void mapPojisteniToPerson(PojisteniEntity entity, PojisteniDTO dto){
        entity.setOsoba(personRepository.getReferenceById(dto.getOsobaId()));
    }
}
