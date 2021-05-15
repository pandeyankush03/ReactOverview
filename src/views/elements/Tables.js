import React, {Component} from 'react';
import {
  Card,
  CardBody,
  Table
} from 'reactstrap';
import axios from 'axios';

class TablePage extends Component {
    constructor() {
        super();
        this.state = { business: [] };
    }
    componentDidMount() {
        debugger;
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => {
                this.setState({ business: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.business.map((obj,i)=> {
            return <tr  obj key={i} >
                                <td>
                    {obj.id}
                </td>
                <td>
                    <img src={obj.avatar} />
                </td>
                <td>
                    {obj.first_name}
                </td>
                <td>
                    {obj.last_name}
                </td>
                <td>
                    {obj.email}
                </td>
                
                {/* <td>
                    <Link to={"/edit/" + obj.patientId} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button type="button" onClick={this.DeletePatient} className="btn btn-danger">Delete</button>
                </td> */}
            </tr>;
        });
    }

  render() {
    return (
        <Card>
            <CardBody>
            <Table hover>
            <thead>
                        <tr>
                            <th><b>Id</b></th>
                            <th><b>Profile</b></th>
                            <th><b>First Name</b></th>
                            <th><b>Last Name</b></th>
                            <th><b>Email</b></th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
            </Table>
            </CardBody>
        </Card>
    )
  }
}

export default TablePage;
