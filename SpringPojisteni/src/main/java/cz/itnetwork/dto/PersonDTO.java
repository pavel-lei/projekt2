package cz.itnetwork.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonDTO {
    @JsonProperty("_id")
    private long id;
    private String jmeno;
    private String prijmeni;
    private String email;
    private String telefon;
    private String ulice;
    private String mesto;
    private String psc;
}
