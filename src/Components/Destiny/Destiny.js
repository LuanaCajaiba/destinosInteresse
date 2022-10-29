//import {useState} from reactSelect;
import React from 'react'
//import Destiny from '.'
import './Destiny.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DropdownCountry from '../Forms/DropdownCountry';
import DropdownCity from '../Forms/DropdownCity';
import reactSelect from 'react-select';
import { Redirect } from 'react-router'





class Destiny extends React.Component{




    state = {
        country: []
    };

    componentDidMount(){
        fetch ('https://amazon-api.sellead.com/country')
        .then(res => res.json())
        .then(res => {
            this.setState({
                country: res
            });
        });    
    }





    render(){
        return(
<div className='container'>

    <div className='botao'>
    


    </div>

</div>
        );
    }

};



export default Destiny