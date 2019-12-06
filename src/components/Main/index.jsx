import React, {Component} from "react";
import "./style.scss"

class Main extends Component {
    state = {
      odorosla: 0,
      dzieci: 0,
      mlodziez: 0,
      auto: 0,
      bus: 0,
      energia: 0,
      przyczepa: 0,
      camper: 0,
      namiot2: 0,
      namiot4: 0,
      namiot6: 0,
      motor: 0,
      pies: 0,
      altana: 0,
        numbDays: 0,
        odoroslaPrice: 17,
        dzieciPrice: 10,
        mlodziezPrice: 14,
        autoPrice: 15,
        busPrice: 35,
        energiaPrice: 16,
        przyczepaPrice: 35,
        camperPrice: 40,
        namiot2Price: 14,
        namiot4Price: 18,
        namiot6Price: 30,
        motorPrice: 10,
        piesPrice: 8,
        altanaPrice: 15,
        taxa: 2,
        polish : true
    };
    onButtonClickPlus = (e)=> {
         e.preventDefault();
        const Plus = Number(e.target.value) + 1;
        this.setState( {
            [ e.target.name]: Plus
        })
    };
    OnButtonLanguage = (e)=> {
        e.preventDefault();
        const polish = this.state.polish;
        this.setState({
            polish : !polish,
        })
    };
    onButtonClickMinus = (e)=> {
        e.preventDefault();
        let Minus = Number(e.target.value) - 1;
        Minus < 0 ? (this.setState({
            [ e.target.name]: 0
        })) : (this.setState({
            [ e.target.name]: Minus
        }));
    };
    render() {
        const {odorosla, dzieci, mlodziez, auto, bus, energia, przyczepa, camper, namiot2, namiot4, namiot6,motor, pies, altana ,taxa, numbDays} = this.state;
        const {odoroslaPrice, dzieciPrice, mlodziezPrice, autoPrice, busPrice, energiaPrice, przyczepaPrice, camperPrice, namiot2Price, namiot4Price, namiot6Price,motorPrice, piesPrice, altanaPrice}=this.state;
        const dayPrice = odorosla*odoroslaPrice + dzieci*dzieciPrice + mlodziez*mlodziezPrice + auto*autoPrice + bus*busPrice + energia*energiaPrice + przyczepa*przyczepaPrice + camper*camperPrice + namiot2*namiot2Price + namiot4*namiot4Price + namiot6*namiot6Price +motor*motorPrice+ pies*piesPrice+ altana*altanaPrice+((odorosla+dzieci+mlodziez)*taxa);
        const allPrice= dayPrice*numbDays;
        return (
            <div className="borderBox">
            <div style={{fontSize:'xx-large', margin : '50px 0 0 0', textAlign: 'center', paddingTop: '20px', color: 'white'}}>{this.state.polish === true ? `Kalkulator pobytu 2019` : `PRICE LIST 2019`}</div>
            <div> </div>
            <section className="container">
            <div>
            <table className="zui-table">
                <tbody>
                <tr>
                    <td>{this.state.polish === true ? `OSOBA DOROSŁA` : `ERWACHSENE`}</td>
                    <td ><strong>{odoroslaPrice} zł</strong></td>
                    <td > <button onClick={this.onButtonClickMinus.bind(this)} name="odorosla" value={odorosla}> - </button> </td>
                    <td> {odorosla}</td>
                    <td > <button onClick={this.onButtonClickPlus.bind(this)} name="odorosla" value={odorosla}> + </button> </td>
                </tr>
                <tr>
                    <td> {this.state.polish === true ? `DZIECKO DO LAT 10` : `KIND BIS 10 JAHREN`}</td>
                    <td ><strong>{dzieciPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="dzieci" value={dzieci}> - </button> </td>
                    <td>{dzieci} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="dzieci" value={dzieci}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `MŁODZIEŹ / STUDENT` : `STUDENTEN/ JUNGE LEUTE`}</td>
                    <td ><strong> {mlodziezPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="mlodziez" value={mlodziez}> - </button> </td>
                    <td>{mlodziez} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="mlodziez" value={mlodziez}> + </button> </td>
                </tr>
                <tr>
                    <td> {this.state.polish === true ? `SAMOCHÓD` : `CAR`}</td>
                    <td ><strong>{autoPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="auto" value={auto}> - </button> </td>
                    <td>{auto} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="auto" value={auto}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `BUS /VAN SYPIALNY` : `BUS /VAN`}</td>
                    <td ><strong>{busPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="bus" value={bus}> - </button> </td>
                    <td>{bus} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="bus" value={bus}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `ENERGIA` : `STROM ANSCHLUSS`}</td>
                    <td ><strong>{energiaPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="energia" value={energia}> - </button> </td>
                    <td>{energia} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="energia" value={energia}> + </button> </td>
                </tr>
                <tr>
                    <td> {this.state.polish === true ? `PRZYCZEPA Z PRZEDSIONKIEM` : `CARAVAN MIT VORZELT`}</td>
                    <td ><strong> {przyczepaPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="przyczepa" value={przyczepa}> - </button> </td>
                    <td>{przyczepa} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="przyczepa" value={przyczepa}> + </button> </td>
                </tr>
                <tr>
                    <td> CAMPER</td>
                    <td ><strong>{camperPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="camper" value={camper}> - </button> </td>
                    <td>{camper} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="camper" value={camper}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `NAMIOT 2 OSOBOWY` : `2 PERSONEN ZELT`}</td>
                    <td ><strong>{namiot2Price} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="namiot2" value={namiot2}> - </button> </td>
                    <td>{namiot2} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="namiot2" value={namiot2}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `NAMIOT 4 OSOBOWY` : `4 PERSONEN ZELT`}</td>
                    <td ><strong>{namiot4Price} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="namiot4" value={namiot4}> - </button> </td>
                    <td>{namiot4} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="namiot4" value={namiot4}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `NAMIOT 5/6 OSOBOWY` : `5/6 PERSONEN ZELT`}</td>
                    <td ><strong>{namiot6Price} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="namiot6" value={namiot6}> - </button> </td>
                    <td>{namiot6} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="namiot6" value={namiot6}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `MOTOCYKL` : `MOTORRAD`}</td>
                    <td ><strong>{motorPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="motor" value={motor}> - </button> </td>
                    <td>{motor} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="motor" value={motor}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `PIES` : `HUND`}  </td>
                    <td ><strong>{piesPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="pies" value={pies}> - </button> </td>
                    <td>{pies} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="pies" value={pies}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `ALTANKA/PAWILON OGRODOWY` : `GARTENPAVILLON`}</td>
                    <td ><strong>{altanaPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="altana" value={altana}> - </button> </td>
                    <td>{altana} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="altana" value={altana}> + </button> </td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `ILOŚĆ DNI POBYTU ?` : `Anzahl der Tage ?`}</td>
                    <td > </td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="numbDays" value={numbDays}> - </button> </td>
                    <td>{numbDays} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="numbDays" value={numbDays}> + </button> </td>
                </tr>
                <tr>
                    <td><em>{this.state.polish === true ? `Opłata miejscowa  za osobę` : ` Kurtaxe`}</em></td>
                    <td colSpan={4}><strong>&nbsp;  {taxa} zł </strong></td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `CENA ZA DOBĘ` : `Preis pro Nacht`}</td>
                    <td colSpan={4}> {dayPrice}</td>
                </tr>
                <tr>
                    <td>{this.state.polish === true ? `CENA ZA CAŁY POBYT` : `PREIS FÜR DEN GANZEN AUFENTHALT`}</td>
                    <td colSpan={4}> {allPrice}</td>
                </tr>
                </tbody>
            </table>
                {this.state.polish === true ? <button  className="pl" onClick={this.OnButtonLanguage} >{this.state.polish === true ? `DE` : `PL`}</button> : <button  className="de" onClick={this.OnButtonLanguage} >{this.state.polish === true ? `DE` : `PL`}</button>}

            </div>
            </section>
            </div>
        )
    }
}

export default Main
