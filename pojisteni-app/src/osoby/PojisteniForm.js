import { useEffect, useState } from "react";
import InputField from "../components/InputField";
import { apiGet, apiPut, apiPost } from "../utils/api";
import { useLocation, useParams } from "react-router-dom";

const PojisteniForm = () =>{
    const {id} = useParams();

    const [typState, setTyp] = useState("");
    const [castkaState, setCastka] = useState("");
    const [predmetState, setPredmet] = useState("");
    const [platneOdState, setPlatneOd] = useState("");
    const [platneDoState, setPlatneDo] = useState("");

    const [osobaState, setOsoba] = useState({});

    const [sentState, setSent] = useState(false);
    const [successState, setSuccess] = useState(false);
    const [errorState, setError] = useState(null);
    
    useEffect( () =>{apiGet("/detail/"+id).then( data => 
        setOsoba({"osobaId": id, "jmeno": data.jmeno+' '+data.prijmeni}))}, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const body = {osobaId: osobaState.osobaId, typ: typState, castka: castkaState, 
            predmet: predmetState, platneOd :platneOdState, platneDo: platneDoState};
    
        //(id ? apiPut("/pojisteni/"+id, body) : apiPost("/pojisteni", body))
        // tak tohle nejde ... plést dohromady idOsoby a idPojištění - musím ještě dodělat
        // ideálně by aplikace měla od serveru chtít stránku osob a ty pak dál předávat
        apiPost("/pojisteni", body)
        .then((data) => {
            console.log("succcess", data);
            setSent(true);
            setSuccess(true);
        });
    }

    return (
        <div className="container">
            <h3>Přidat pojištění k {osobaState.jmeno}</h3>

            <form onSubmit={handleSubmit}>
                <div className="row m-3">
                    <div className="form-group">
                        <label>Typ pojištění</label>
                        <select className="form-select"
                        onChange={ e => setTyp(e.target.value)}>
                            <option>Pojištění majetku</option>
                            <option>Pojištění osob</option>
                        </select>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-5">
                        <InputField label="Částka" type="number" required={true}
                        value={castkaState} prompt="Zadejte částku" name="castka"
                        handleChange={(e) => setCastka(e.target.value)}
                        />
                    </div>
                    <div className="col-5">
                        <InputField label="Předmět pojištění" type="text" required={true}
                        value={predmetState} prompt="Zadejte jméno" name="predmet"
                        handleChange={(e) => setPredmet(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-5">
                        <InputField label="Platnost od" type="date" required={true}
                        value={platneOdState} prompt="Zadejte jméno" name="od"
                        min="0000-01-01"
                        handleChange={(e) => setPlatneOd(e.target.value)}
                        />
                    </div>
                    <div className="col-5">
                        <InputField label="Platnost do" type="date" required={true}
                        value={platneDoState} prompt="Zadejte jméno" name="do"
                        min="0000-01-01"
                        handleChange={(e) => setPlatneDo(e.target.value)}
                        />
                    </div>
                </div>
                <input type="submit" className="btn btn-primary" value="uložit" />
            </form>
        </div>
    );
}
export default PojisteniForm;