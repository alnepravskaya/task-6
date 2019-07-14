import React from 'react';


class Actors extends React.Component {
    constructor() {
        super();
        this.state = {
            people: [],
            value: ""
        }
        this.textInput = React.createRef();

    }

    componentDidMount() {
        this.getPeopleList();
    }

    getPeopleList() {
        fetch('https://swapi.co/api/people/')
            .then(response => response.json())
            .then(data => {
                this.setState({people: data.results})
            })
            .catch(error => console.error(error))

    }

    deletePerson(index) {
        this.setState({
            people: [
                ...this.state.people.slice(0, index),
                ...this.state.people.slice(index + 1)
            ]
        });
    }


    addPerson() {
        this.setState({people: this.state.people.concat({"name": this.textInput.current.value})});
        this.textInput.current.value = ''
    }

    render() {
        const list = this.state.people.map((item, index) => {
            return <li key={index}><span className="text">{item.name}</span>
                <button
                    onClick={this.deletePerson.bind(this, index)}>delete
                </button>
            </li>;
        });

        return <div>
            <ul className="list">
                {list}
            </ul>
            <div className="addBlock">
                <input type="text" ref={this.textInput} className="formItem"
                       placeholder="name"/>
                <button
                    onClick={this.addPerson.bind(this)}>Add
                </button>
            </div>
        </div>;

    }
}


export default Actors;
