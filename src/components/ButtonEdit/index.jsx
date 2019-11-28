import React ,{Component} from "react";

class ButtonEdit extends Component {
    onButtonEditClick = () => {
        this.props.onButtonEdit();
    };
    render() {
        return <td style={{backgroundColor: 'red', color: 'white', textShadow: 'none'}} onClick={this.onButtonEditClick}> Edytuj </td>
    }
}


export default ButtonEdit