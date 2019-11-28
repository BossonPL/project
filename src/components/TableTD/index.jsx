import React, {Component} from "react";




class TableTD extends Component {
    render(){
        const {guest} = this.props;
        return(
            <>
                <td>{guest.surname}</td>
                <td>{guest.name}</td>
                <td>{guest.city}</td>
                <td>{guest.street}</td>
                <td>{guest.country}</td>
                <td>{guest.arrive}</td>
                <td>{guest.departure}</td>
                <td>{guest.days}</td>
                <td>{guest.notes}</td>
                </>
        )
    }
}
export default TableTD