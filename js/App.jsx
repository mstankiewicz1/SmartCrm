import React from 'react';
import Customer from './Customer.jsx';


class App extends React.Component {

    state = {
        customers: [
            {
                "id": 0,
                "name": "Jan",
                "surname": "Kowalski"
            },
            {
                "id": 1,
                "name": "Anna",
                "surname": "Nowak"
            },
            {
                "id": 2,
                "name": "Henryk",
                "surname": "Sienkiewicz"
            }
        ]
    };



    render() {

        const customers = this.state.customers.map( customer => (
            <Customer/>
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