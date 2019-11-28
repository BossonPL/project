import React, {Component} from "react";
import "./style.scss";
import uniqid from 'uniqid';
import FormHead from "../FormHead";
// import InnerMainForm from "../InnerMainForm";
import TableTD from "../TableTD";
import ButtonRemove from "../ButtonRemove";
import ButtonEdit from "../ButtonEdit";


class MainForm extends Component  {
    state = {
        guest : [],
        id: '',
        surname: '',
        name: '',
        country: '',
        city: '',
        street: '',
        arrive: '',
        departure: '',
        days: '',
        notes: '',
        searchGuests: [],
        searchNameGuests: [],
        searchCountryGuests: [],
        searchDateGuests: [],
        nonPolandNbr: ''
    };
    componentDidMount() {
        this.fetchGuests();
    }

    fetchGuests = () => {
        const URL_ADDRESS = 'http://localhost:3000/guests';
        fetch(URL_ADDRESS)
            .then(data => data.json())
            .then(guest => this.setState({ guest }))
    };

    onInputChange = e => {
        this.setState({
           [ e.target.name]: e.target.value
        });
        const nonPoland = this.state.guest.filter( el => el.country !== 'Polska');
        this.setState({
            nonPolandNbr: nonPoland.length
        })
    };

    onButtonClick = (e)=> {
        e.preventDefault();
        const date1 = new Date(this.state.arrive);
        const date2 = new Date(this.state.departure);
        const Difference_In_Time = date2.getTime() - date1.getTime();
        const Difference_In_Day = Difference_In_Time / (1000 * 3600 * 24);
        const Difference_In_DayString= String(Difference_In_Day);
        let Difference_In_Days ;
        Difference_In_DayString === 'NaN' ?  ( Difference_In_Days = 0 ) : Difference_In_Days =Difference_In_DayString ;
        const addGuest = {
            id: uniqid(),
            surname: this.state.surname,
            name: this.state.name,
            country: this.state.country,
            city: this.state.city,
            street: this.state.street,
            arrive: this.state.arrive,
            departure: this.state.departure,
            days: Difference_In_Days,
            notes: this.state.notes
        };
        this.setState( {
            guest: [...this.state.guest, addGuest],
            id: '',
            surname: '',
            name: '',
            country: '',
            city: '',
            street: '',
            arrive: '',
            departure: '',
            days:'',
            notes: ''
        });
        const URL_ADDRESS = `http://localhost:3000/guests`;
        fetch(URL_ADDRESS, {
            method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            body: JSON.stringify(addGuest)
    })
            .then(() => this.fetchGuests());
    };
    onButtonSearchClick = (e) => {
        e.preventDefault();
        const filteredGuests = this.state.guest.filter( el => el.surname === this.state.surname);
        this.setState({
            searchGuests : filteredGuests,
            surname: ''
        });
        const filteredNameGuests = this.state.guest.filter( el=> el.name === this.state.name);
        this.setState({
            searchNameGuests : filteredNameGuests,
            name: ''
        });
        const filteredCountryGuests = this.state.guest.filter( el=> el.country === this.state.country);
        this.setState({
            searchCountryGuests : filteredCountryGuests,
            country: ''
        });
        const filteredDateGuests = this.state.guest.filter( el=> el.arrive === this.state.arrive);
        this.setState({
            searchDateGuests : filteredDateGuests,
            date: ''
        });
    };
    onGuestDelete = id => {
        const URL_ADDRESS = `http://localhost:3000/guests/${id}`;
        fetch(URL_ADDRESS, { method: 'delete' })
            .then(() => this.fetchGuests());
        this.setState({
            searchGuests : [],
            searchNameGuests : [],
            searchCountryGuests: [],
            searchDateGuests: []
        })
    };
    onGuestEdit = id => {
        const URL_ADDRESS = `http://localhost:3000/guests/${id}`;
        fetch(URL_ADDRESS)
            .then(data => data.json())
            .then(data => this.setState({
                surname: data.surname,
                name: data.name,
                country: data.country,
                city: data.city,
                street: data.street,
                arrive: data.arrive,
                departure: data.departure,
                notes: data.notes
            })).then(() => this.onGuestDelete(id));
    };

    render() {
        const {surname, name, country, city, street, arrive, departure, guest, notes ,searchGuests, searchNameGuests, searchCountryGuests, searchDateGuests} = this.state;
        return (
            <>
            <div className="container">
                <div className="logo">
                </div>
                <h1> Rejestracja Gości </h1>
                <p> Ilość gości w bazie : {guest.length}</p>
                <p> {this.state.nonPolandNbr !==0 ? `Ilość zagranicznych gości w bazie : ${this.state.nonPolandNbr}`: null}</p>
                <form  className="form">
                    <input onChange={this.onInputChange} type="text" name="surname" value={surname} placeholder="Nazwisko"/>
                    <input onChange={this.onInputChange} type="text" name="name" value={name} placeholder="Imię"/>
                    <input onChange={this.onInputChange} type="text" name="country" value={country} placeholder="Kraj pochodzenia"/>
                    <input onChange={this.onInputChange} type="text" name="city" value={city} placeholder="Miasto"/>
                    <input onChange={this.onInputChange} type="text" name="street" value={street} placeholder="Ulica"/>
                    <input onChange={this.onInputChange} type="date" name="arrive" value={arrive} placeholder="Data przyjazdu : "/>
                    <input onChange={this.onInputChange} type="date" name="departure" value={departure} placeholder="Data wyjazdu : "/>
                    <input onChange={this.onInputChange} type="textarea" name="notes" value={notes} placeholder="Uwagi"/>
                </form>
                {/*<InnerMainForm  onChange={this.onInputChange} surname={surname} name={name} country={country} city={city} street={street} arrive={arrive} departure={departure} notes={notes}/>*/}
                <div className="buttons">
                    <button  onClick={this.onButtonSearchClick} className='btn search' name="szukaj"> Szukaj </button>
                     <button onClick={this.onButtonClick} className='btn add' name="dodaj"> Dodaj</button>
                </div>
            </div>
                <table className="zui-table">
                    <tbody>
                    {searchCountryGuests.map(searchCountryGuests => (
                        <tr key={searchCountryGuests.id}>
                            <TableTD guest={searchCountryGuests}/>
                            <ButtonEdit onButtonEdit={this.onGuestEdit.bind(this, searchCountryGuests.id)}/>
                            <ButtonRemove onButtonRemove={this.onGuestDelete.bind(this, searchCountryGuests.id)}/>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <table className="zui-table">
                    <tbody>
                    {searchDateGuests.map(searchDateGuests => (
                        <tr key={searchDateGuests.id}>
                            <TableTD guest={searchDateGuests}/>
                            <ButtonEdit onButtonEdit={this.onGuestEdit.bind(this, searchDateGuests.id)}/>
                            <ButtonRemove onButtonRemove={this.onGuestDelete.bind(this, searchDateGuests.id)}/>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <table className="zui-table">
                    <tbody>
                    {searchNameGuests.map(searchNameGuests => (
                        <tr key={searchNameGuests.id}>
                            <TableTD guest={searchNameGuests}/>
                            <ButtonEdit onButtonEdit={this.onGuestEdit.bind(this, searchNameGuests.id)}/>
                            <ButtonRemove onButtonRemove={this.onGuestDelete.bind(this, searchNameGuests.id)}/>
                        </tr>
                    ))}
                    </tbody>
                </table>
                    <table className="zui-table">
                        <tbody>
                        {searchGuests.map(searchGuests => (
                            <tr key={searchGuests.id}>
                                <TableTD guest={searchGuests} />
                                <ButtonEdit onButtonEdit={this.onGuestEdit.bind(this, searchGuests.id)}/>
                                <ButtonRemove onButtonRemove={this.onGuestDelete.bind(this, searchGuests.id)}/>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                <table className="zui-table">
                   <FormHead />
                    <tbody>
                    {guest.map(guest => (
                        <tr key={guest.id}>
                           <TableTD guest={guest} />
                            <ButtonEdit onButtonEdit={this.onGuestEdit.bind(this, guest.id)}/>
                            <ButtonRemove onButtonRemove={this.onGuestDelete.bind(this, guest.id)}/>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </>
        )
    }
}

export default MainForm;
