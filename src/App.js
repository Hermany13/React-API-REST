import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

import {Menubar} from 'primereact/menubar';
import {withRouter} from 'react-router-dom';

class App extends Component {

  
  render() {
    const menuitems = [
      {
         label:'API em Uso',
         icon:'pi pi-fw pi-dollar',
         command:() => this.props.history.push('/')
      },
      {
        label:'Descrição',
        icon:'pi pi-fw pi-file',
        command:() => this.props.history.push('/descr')
     },
      {
         label:'Contato',
         icon:'pi pi-fw pi-user',
         command:() => this.props.history.push('/contato')
      },
   ];

   const menu = {
     backgroundColor: "#66B3FF",
     borderColor: "#CCE6FF",
   }

    return (
      <div className="App">
        <Menubar model={menuitems} style={menu}/>      
        <div id="main">
            <main>
                <div className="content" id="content">
                    {this.props.children}
                </div>
            </main>
        </div>
      </div>
    );
  }
}

export default withRouter(App);