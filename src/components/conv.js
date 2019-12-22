import React, { Component } from 'react';



class Conv extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

  render() {


    var { isLoaded, items } = this.state;

    if (!isLoaded) {
        return <div style={ca}>Carregando...</div>;
    }
    else {
        return (
            <div className="App">              
            <ul style={lista}>
                {items.map(item => (
                    <li key={item.id}>
                       <span style={no}>Nome:</span> {item.name} | <span style={no}>Cidade:</span> {item.address.city}
                    </li>
                ))}
            </ul>

            </div>
          );
    }

    
  }
}

const lista = {
    listStyleType: "none",
}

const no = {
    fontWeight: "bold",
}

const ca = {
    marginTop: "10px",
}

export default Conv; 

