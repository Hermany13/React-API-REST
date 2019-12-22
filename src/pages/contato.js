import React from 'react';

const Contato = () => (
    <div className="title">
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

export default Contato;