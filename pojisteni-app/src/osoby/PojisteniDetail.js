import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiDelete, apiGet } from "../utils/api";
import dateStringFormatter from "../utils/datum";

const PojisteniDetail = () =>{
    const {id}=useParams();

    const [pojisteniState, setPojisteni] = useState({});
    const [osobaState, setOsoba] = useState({});

    useEffect( () => {if(id) apiGet("/detail/pojisteni/"+id).then( data => setPojisteni(data))} ,[id]);

    return (
        <div>
            <h3>Detail pojištění </h3>
            <div className="row"><div className="col">{pojisteniState.typ}</div></div>
            <div className="row">
                <div className="col-3">částka: {pojisteniState.castka} Kč</div>
                <div className="col-6">{pojisteniState.predmet}</div>
            </div>
            <div className="row">
                <div className="col-3">od: {dateStringFormatter(pojisteniState.platneOd)}</div>
                <div className="col-6">do: {dateStringFormatter(pojisteniState.platneDo)}</div>
            </div>
        </div>
    );
}
export default PojisteniDetail;