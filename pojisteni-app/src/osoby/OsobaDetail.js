import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import { Link, Route, Routes, useParams } from "react-router-dom";
import PojisteniForm from "./PojisteniForm";

const OsobaDetail = () =>{
    const {id} = useParams();
    const [osobaState, setOsoba] = useState({});
    const [pojisteniState, setPojisteni] = useState([]);

    useEffect( () => {apiGet("/detail/"+id).then( data => setOsoba(
        {jmeno: data.jmeno, prijmeni: data.prijmeni, email: data.email, telefon: data.telefon,
        ulice: data.ulice, mesto: data.mesto, psc: data.psc}
        )).catch((error) => console.error(error));
        apiGet("/pojisteni/" + id).then( data => setPojisteni(data) );           
    }, [id]);

    return (
        <div >
            <h3 className="mt-3">{osobaState.jmeno} {osobaState.prijmeni}</h3>
            <hr/>
            <div className="row">
                <div className="col-6">{osobaState.ulice}</div>
                <div className="col-6">{osobaState.email}</div>
            </div>
            <div className="row">
                <div className="col-6">{osobaState.mesto}</div>
                <div className="col-6">{osobaState.telefon}</div>
            </div>
            <div className="row">
                <div className="col-6">{osobaState.psc}</div>
            </div>
            <table className="mt-5">
                <thead>
                    <td>typ</td>
                    <td>částka</td>
                </thead>
                {pojisteniState.map( item => (
                   <tr>
                    <td>{item.typ}</td>
                    <td>{item.castka}</td>
                    <td>
                        <Link to={"#"} className="btn btn-danger">Odstranit</Link>
                        <Link to={"/editovat/" + item._id} className="btn btn-warning">Editovat</Link>
                        <Link to={"/pojisteni/detail/" + item._id} className="btn btn-info">Detail</Link>
                    </td>
                   </tr> 
                ) )}
            </table>
            <Link to={"/pojisteni/"+id} >Přidat pojištění</Link>
        </div>
    );
}
export default OsobaDetail;