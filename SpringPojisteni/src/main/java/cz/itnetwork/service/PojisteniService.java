package cz.itnetwork.service;

import cz.itnetwork.dto.PojisteniDTO;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PojisteniService {
    List<PojisteniDTO> getPojisteni(long id);
    PojisteniDTO getById(long pojisteniId);
    List<PojisteniDTO> getAllPojisteni();
    PojisteniDTO addPojisteni(PojisteniDTO pojisteniDTO);
}
