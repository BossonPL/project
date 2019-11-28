import React, {Component} from "react";


class FormHead extends Component {
    render () {
        return (
            <>
                <thead>
                     <tr>
                        <th>Nazwisko</th>
                        <th>Imię</th>
                        <th>Miasto</th>
                        <th>Ulica</th>
                        <th>Kraj</th>
                        <th>Data przyjazdu</th>
                        <th>Data wyjazdu</th>
                        <th>Ilość dni</th>
                        <th>Uwagi</th>
                     </tr>
                </thead>
                </>
        )
    }

}

export default FormHead



