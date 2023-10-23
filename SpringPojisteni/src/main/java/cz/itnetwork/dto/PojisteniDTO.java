package cz.itnetwork.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PojisteniDTO {
    @NotNull
    @JsonProperty("_id")
    private long id;
    @NotNull
    private long osobaId;
    private String typ;
    @Positive
    private int castka;
    @NotBlank
    private String predmet;
    private Date platneOd;
    private Date platneDo;
}
