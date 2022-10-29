import { useEffect, useState } from "react";
import { fetchCountry} from "../../../helpers/amazon";

const DropdownCountry = () => {
const [states, setStates] = useState([]);
    useEffect(()=>{
        fetchCountry().then((states) => {
            setStates(states);
        });
    }, []);


    return(
    <select id='country'>

        {states.map((state)=>{
            const {code, name_ptbr} = state;
            return (<option key={code} value={code}> {name_ptbr}</option>)
        })}
    </select>
    )
};

export default DropdownCountry;