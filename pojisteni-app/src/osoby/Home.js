import { useEffect, useState } from "react";
import { apiDelete, apiGet } from "../utils/api";
import { Link } from "react-router-dom";

const Home = () =>{

    const [osobyState,setOsoby] = useState([]);

    useEffect( () => {apiGet("/home").then( data => setOsoby(data) )},[]);

    const deletePerson = async (id) => {
        try{
            await apiDelete("/osoba/"+id);
        }catch (error) {
        console.log(error.message);
        alert(error.message)
        }
    };

    return (
        <div>
            <h3>Osoby (event. i pojištěné)</h3>
            <table>
                <thead>
                    <tr>
                        <th>Jméno</th>
                        <th>Ulice</th>
                        <th>Město</th>
                    </tr>
                </thead>
                <tbody>
                    {osobyState.map( item => (
                        <tr>
                            <td>{item.jmeno} {item.prijmeni}</td>
                            <td>{item.ulice}</td>
                            <td> {item.mesto}</td>
                            <td>
                                <button onClick={() => deletePerson(item._id)} className="btn btn-danger">Odstranit</button>
                                <Link to={"/osoba/editovat/" + item._id} className="btn btn-warning">Editovat</Link>
                                <Link to={"/detail/" + item._id} className="btn btn-info">Detail</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Home;