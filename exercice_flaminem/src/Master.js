import React from 'react';
import { Table, Input, Container, Row } from 'reactstrap';
import Detail from "./Detail.js";
import './style/Detail.css';



class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailAdresse: "",
            users: [
                { nom: "Martin", prenom: "Arthur", adresse: "12 Avenue theophile Gautier" },
                { nom: "Dupond", prenom: "Edouard", adresse: "14, rue Pergolèse 75016 Paris" },
                { nom: "Lemaitre", prenom: "Christian", adresse: "12 Avenue theophile Gautier" },

            ]
        };
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    onRadioChange = (e) => {
        this.setState({ detailAdresse: document.querySelector('input[name=radio]:checked').value });
    }

    render() {
        var listUsers = this.state.users.map(e => (
            <tr key={e.nom}>
                <td>
                    <Input type="radio" name="radio" value={e.adresse} onChange={this.onRadioChange} />
                </td>
                <td>
                    {e.nom}
                </td>
                <td>
                    {e.prenom}
                </td>
            </tr>
        ));
        return (
            <div>
                <Container>
                    <Row>
                        <h3 className="titreList">Liste des clients</h3>
                        <Table hover bordered style={{ textAlign: 'center' }}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUsers}
                            </tbody>
                        </Table>
                    </Row>
                    <Detail adresse={this.state.detailAdresse} />

                </Container>
            </div>
        );
    }
}

export default Master;
