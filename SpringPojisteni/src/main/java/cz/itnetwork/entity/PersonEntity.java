package cz.itnetwork.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity(name = "pojistenci")
@Getter
@Setter
public class PersonEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToMany(mappedBy = "osoba")
    private List<PojisteniEntity> pojisteni;
    @Column(nullable = false)
    private String jmeno;
    @Column(nullable = false)
    private String prijmeni;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String telefon;
    @Column(nullable = false)
    private String ulice;
    @Column(nullable = false)
    private String mesto;
    @Column(nullable = false, columnDefinition = "VARCHAR", length = 6) //386 01 apod.
    private String psc;

}
