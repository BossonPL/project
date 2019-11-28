import React ,{Component} from "react";

import FormHead from "../FormHead";
import TableTD from "../TableTD";
import ButtonEdit from "../ButtonEdit";
import ButtonRemove from "../ButtonRemove";

class MainClientList extends Component {
    onButtonEditClick = () => {
        this.props.onButtonEdit();
    };
    onButtonRemoveClick = () => {
        this.props.onButtonRemove();
    };

    render () {
        const {guest}=this.props;
        return (

            <table className="zui-table">
                <FormHead />
                <tbody>
                {guest.map(guest => (
                    <tr key={guest.id}>
                        <TableTD guest={guest} />
                        <ButtonEdit onButtonEdit={this.onButtonEditClick.bind(this, guest.id)}/>
                        <ButtonRemove onButtonRemove={this.onButtonRemoveClick.bind(this, guest.id)}/>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}


export default MainClientList