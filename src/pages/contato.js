import React from 'react';
import profile from "./perfil.jpg";



const Contato = () => (
    <div className="title">
        <img src={profile} style={logo}/>
        <h2>Hermany Vieira Oliveira</h2>        
        <p><span style={spa}>E-mail:</span> hermanyvieiratj@gmail.com</p>
        <p><span style={spa}>GitHub:</span><a href="https://github.com/Hermany13" style={lin}> https://github.com/Hermany13</a></p>
    </div>
);


const spa = {
    fontWeight: "bold",
}

const lin = {
    cursor: "pointer"
}

const logo = {
    border: '3px solid #66B3FF',
    width: "170px",
    borderRadius: "100px",
    marginTop: "15px",
}

export default Contato;