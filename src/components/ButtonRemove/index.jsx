import React ,{Component} from "react";

class ButtonRemove extends Component {
    onButtonRemoveClick = () => {
        this.props.onButtonRemove();
    };
    render() {

        return <td style={{backgroundColor: 'red', color: 'white', textShadow: 'none'}} onClick={this.onButtonRemoveClick}> Usuń </td>
    }
}


export default ButtonRemove