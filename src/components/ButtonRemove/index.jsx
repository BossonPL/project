import React ,{Component} from "react";

class ButtonAdd extends Component {
    render() {
        return <td style={{backgroundColor: 'red', color: 'white', textShadow: 'none'}} onClick={this.onGuestDelete.bind(this, searchCountryGuests.id)}> Usuń </td>
    }
}


export default ButtonRemove