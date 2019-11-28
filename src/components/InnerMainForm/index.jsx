import React, {Component} from "react";


class InnerMainForm extends Component{
    render() {
        const {surname, name, country, city, street, arrive, departure, notes }=this.props;
            return (
                <>
                    <form className="form">
                        <input onChange={this.onInputChange} type="text" name="surname" defaultValue={surname}  placeholder="Nazwisko"/>
                        <input onChange={this.onInputChange} type="text" name="name" defaultValue={name}  placeholder="Imię"/>
                        <input onChange={this.onInputChange} type="text" name="country" defaultValue={country}  placeholder="Kraj pochodzenia"/>
                        <input onChange={this.onInputChange} type="text" name="city" defaultValue={city}  placeholder="Miasto"/>
                        <input onChange={this.onInputChange} type="text" name="street" defaultValue={street}  placeholder="Ulica"/>
                        <input onChange={this.onInputChange} type="date" name="arrive" defaultValue={arrive}  placeholder="Data przyjazdu : "/>
                        <input onChange={this.onInputChange} type="date" name="departure" defaultValue={departure}  placeholder="Data wyjazdu : "/>
                        <input onChange={this.onInputChange} type="textarea" name="notes" defaultValue={notes}  placeholder="Uwagi"/>
                    </form>
                    </>
            )
    }
}



export default InnerMainForm