import React from 'react';
import './App.css';
import Customer from './Customer';



class App extends React.Component {

    state = {
        customers: []
    };

    componentDidMount(){
        fetch('data/customers.json')
        .then( response => response.json())
        .then( data => {
            this.setState({
                customers: data.customers
            })
        })
    }



    render() {
        const customers = this.state.customers.map( customer => (
            <Customer
                key={customer.id}
                name={customer.name}
                surname={customer.surname}
            />
        ));

        return (
            <div>
                <h1>SmartCrm działa!</h1>
                <ul>
                    {customers}
                </ul>
            </div>
        )
    }
}

export default App;
