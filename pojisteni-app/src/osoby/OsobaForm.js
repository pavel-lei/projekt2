import { Navigate, useNavigate, useParams } from "react-router-dom";
import InputField from "../components/InputField";
import { useEffect, useState } from "react";
import { apiGet, apiPost, apiPut } from "../utils/api";

const OsobaForm = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [jmenoState, setJmeno] = useState("");
    const [prijmeniState, setPrijmeni] = useState("");
    const [emailState, setEmail] = useState("");
    const [telefonState, setTelefon] = useState("");
    const [uliceState, setUlice] = useState("");
    const [mestoState, setMesto] = useState("");
    const [pscState, setPSC] = useState("");

    const [sentState, setSent] = useState(false);
    const [successState, setSuccess] = useState(false);
    const [errorState, setError] = useState(null);

    useEffect( () => {if(id)apiGet("/detail/"+id).then( data => 
        {setEmail(data.email);setJmeno(data.jmeno);setMesto(data.mesto);setPSC(data.psc);
            setPrijmeni(data.prijmeni);setTelefon(data.telefon);setUlice(data.ulice);}
        )},[id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {jmeno: jmenoState, prijmeni: prijmeniState,
            email: emailState, telefon: telefonState,
            ulice: uliceState, mesto: mestoState, psc: pscState};

        (id ? apiPut("/osoba/" + id, body) : apiPost("/osoba", body))
        .then((data) => {
        console.log("succcess", data);
        setSent(true);
        setSuccess(true);
        navigate("/detail");
        })
        .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setSent(true);
        setSuccess(false);
        });
    };
    

    return (
        <div>
            <h3>{id? "Úprava osoby" : "Nová osoba"}</h3>
            <form onSubmit={handleSubmit}>
                <InputField label="Jméno" type="text" required={true} 
                value={jmenoState} prompt="Zadejte jméno" name="jmeno" 
                handleChange={(e) => setJmeno(e.target.value)}
                />
                <InputField label="Příjmení" type="text" 
                value={prijmeniState} required={true} name="prijmeni" 
                handleChange={(e) => setPrijmeni(e.target.value)}
                />
                <InputField label="Email" type="text" 
                value={emailState} required={true} name="email" 
                handleChange={(e) => setEmail(e.target.value)}    
                />
                <InputField label="Telefon" type="text" 
                value={telefonState} required={true} name="telefon"
                handleChange={(e) => setTelefon(e.target.value)}
                />
                <InputField label="Ulice a č. p." type="text" 
                value={uliceState} required={true} name="ulice" 
                handleChange={(e) => setUlice(e.target.value)}
                />
                <InputField label="Město" type="text" 
                value={mestoState} required={true} name="mesto" 
                handleChange={(e) => setMesto(e.target.value)}
                />
                <InputField label="PSČ" type="text" 
                value={pscState} required={true} name="psc" 
                handleChange={(e) => setPSC(e.target.value)}
                />
                <input type="submit" className="btn btn-primary" value="uložit" />
            </form>
        </div>
    );
}
export default OsobaForm;