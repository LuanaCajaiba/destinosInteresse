import { useEffect, useState } from "react";
import { fetchCity } from "../../../helpers/amazon";


const DropdownCity = () => {
 const [cities, setCities] = useState([]);


 useEffect(()=>{
     fetchCity().then((cities) => {
         setCities(cities);
     });
 }, []);


    
    return (
        <select id='city'>
        {cities.map((cities)=>{
            const {id, name_ptbr} = cities;
            return (<option key={id} value={id}> {name_ptbr}</option>)
        })}
    </select>
    )
};

export default DropdownCity;