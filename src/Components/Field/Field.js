import React from 'react';
import { IMaskInput } from "react-imask";
import DropdownCountry from '../Forms/DropdownCountry';
import DropdownCity from '../Forms/DropdownCity';

import './Field.css'

const Field = ({ children }) => (
    <>
    <div className='container'>
        <main className="app-field">
        {children}
    </main>
<div className='containerField'>
<form>
  <label>
    Nome :
    <input required type="text"  placeholder  ="Nome" />
  </label>
  <label>
    Email:
    <input required type="text" placeholder ="E-mail" />
  </label>
  <label>
    Telefone:
    <IMaskInput
  mask="(00)0 0000-0000"
  placeholder="Digite o seu Telefone"
/>
  </label>
  <label>
    CPF
    <IMaskInput
  mask="000.000.000-00"
  placeholder="Digite o seu CPF"
/>
  </label>
  <label htmlFor='country'>País: </label>
<DropdownCountry/>
        <label htmlFor='city'>Cidade: </label>
<DropdownCity/>
  <input type="submit" onClick={alert("Dados cadastrados com sucesso!")} value="Enviar" />
</form>
</div>
</div>
    </>

    
)

export default Field