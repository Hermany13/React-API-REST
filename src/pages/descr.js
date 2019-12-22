import React from 'react';
import jsonex from './jsonEx.JPG';
import fet from './fet.JPG';

const Descr = () => (
    <div className="title">
        <h2>React-API-Rest</h2>
        <p>Esta aplicação foi feita com <a href={"https://pt-br.reactjs.org"}>ReactJS</a> e faz consumo de uma API  </p>
            <p>patrocinada pelo GitHub chamada <a href={"https://jsonplaceholder.typicode.com"}>JSONPlaceholder</a>, que consiste em uma API que</p>
            <p>retorna um JSON com uma série de informações <span style={sp}>fakes</span> para testes e uso acadêmico</p>
            <h4>Exemplo de jsonplaceholder:</h4>
            <img src={jsonex} style={imgC}></img>
            <h4>Consulta</h4>
            <p>O programa usa a função componentDidMount() da API <a href={"https://pt-br.reactjs.org/docs/react-component.html"}>React.Component</a> para que assim</p>
            <p>que a página é montada ele mude os estados de <span style={sp}>"items"</span> e <span style={sp}>"isLoaded"</span> trazendo o Json recebido</p>
            <p>para <span style={sp}>"items"</span> para que o possamos usar na aplicacação e mudando <span style={sp}>"isLoaded"</span> para <span style={sp}>"false"</span>.</p>
            <p>Verificando que o json foi carregado através do <span style={sp}>"isLoaded"</span>, a aplicação gera uma lista com o conteúdo do json</p>
            <p>através da função .map</p>
            <h4>Código de consulta:</h4>
            <img src={fet} style={imgC}></img>
    </div>
);

const sp = {
    fontStyle: "italic",
}

const imgC = {
    width: 350,
}

export default Descr;