import React, {Component} from 'react';


class Conv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then(json => {
                this.setState({isLoaded: true, items: json})
            });
    }

    render() {

        var {isLoaded, items} = this.state;

        if (!isLoaded) {
            return <div style={ca}>Carregando...</div>;
        } else {
            return (
                <div className="App">
                    <ul style={lista}>
                        {items.map(item => (
                            <div  style={lio}>
                                <li key={item.id}>
                                <span style={no}>Nome: </span>
                                {item.name}
                                <div style={ne}><span style={ni}>Username: </span>
                                {item.username}</div> 
                                <div style={ne}><span style={ni}>Email: </span>
                                {item.email}</div> 
                                <div style={ne}><span style={ni}>Cidade: </span>
                                {item.address.city}</div>  
                                                            
                            </li>
                            </div>

                        ))}
                    </ul>

                </div>
            );
        }

    }
}

const lio = {
    backgroundColor: "#CCE6FF",
    marginBottom: "30px",
    borderRadius: "5px",
    marginRight: "30px",
    padding: 15,
}

const lista = {
    listStyleType: "none",
}

const no = {
    fontWeight: "bold",
    marginTop: "-30"
}

const ni = {
    fontWeight: "bold",
    marginTop: "5px"
}

const ne = {
    marginTop: "5px"
}

const ca = {
    marginTop: "10px"
}

export default Conv;
