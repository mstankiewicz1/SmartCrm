import React from 'react';
import './App.css';
import Customer from './Customer';



class App extends React.Component {

    state = {
        customers: [],
        isLoaded: false
    };

    componentDidMount(){
        fetch('data/customers.json')
        .then( response => response.json())
        .then( data => {
            this.setState({
                customers: data.customers,
                isLoaded: true
            })
        })
    }



    render() {

        console.log("renderrr");

        const customers = this.state.customers.map( customer => (
            <Customer
                key={customer.id}
                pesel={customer.pesel}
                name={customer.name}
                surname={customer.surname}
            />
        ));

        return (
            <div>
                <h1>SmartCrm działa!</h1>
                <ul>
                    {this.state.isLoaded ? customers : "...Wczytuję dane"}
                </ul>
            </div>
        )
    }
}

export default App;
