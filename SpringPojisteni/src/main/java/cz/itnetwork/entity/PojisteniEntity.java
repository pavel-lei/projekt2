package cz.itnetwork.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity(name = "pojisteni")
@Getter
@Setter
public class PojisteniEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private PersonEntity osoba;
    @Column(nullable = false)
    private String typ;
    @Column(nullable = false)
    private int castka;
    @Column(nullable = false)
    private String predmet;
    @Column(nullable = false)
    private Date platneOd;
    @Column(nullable = false)
    private Date platneDo;
}
