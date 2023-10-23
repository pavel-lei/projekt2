package cz.itnetwork.entity.repository;

import cz.itnetwork.entity.PersonEntity;
import cz.itnetwork.entity.PojisteniEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PojisteniRepository extends JpaRepository<PojisteniEntity, Long> {
    List<PojisteniEntity> getAllByOsoba(PersonEntity personEntity);
}
