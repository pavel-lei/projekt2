package cz.itnetwork.dto.mapper;

import cz.itnetwork.dto.PojisteniDTO;
import cz.itnetwork.entity.PojisteniEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;


@Mapper(componentModel = "spring")
public interface PojisteniMapper {
    PojisteniEntity toEntity(PojisteniDTO pojisteniDTO);
    @Mapping(source = "osoba.id", target = "osobaId")
    PojisteniDTO toDTO(PojisteniEntity pojisteniEntity);
    PojisteniEntity updateEntity(PojisteniDTO pojisteniDTO, @MappingTarget PojisteniEntity target);
}
