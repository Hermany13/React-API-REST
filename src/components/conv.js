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
        return <div>Loading...</div>;
    }
    else {
        return (
            <div className="App">              
            <ul style={lista}>
                {items.map(item => (
                    <li key={item.id}>
                       Nome: {item.name} | Cidade: {item.address.city}
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

export default Conv; 

