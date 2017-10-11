import React, {Component} from 'react';
import Users from './Users';
import {Card, Row, Col} from 'antd';

class InfoUser extends Component {
    constructor () {
        super();
        this.state = {
            currentUser: null
        }
    }
 
    componentWillMount () {
        this.setState({
            currentUser: JSON.parse(window.localStorage.getItem('users')).find((user) => user.id == this.props.match.params.id)
        });
    }
 
    render () {
        if(this.state.currentUser != null){
            return (
                <div className="infoUserPage">
                    <h1>User Info</h1>
                    <Row type="flex" justify="center">
                        <Col xs={{span:24}} sm={{span:10}} md={{span:6, offset:1}} lg={{span:5}} xl={{span:4}}>
                            <Card bodyStyle={{ padding: 0 }} className="mb-30">
                                <div className="custom-image">
                                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                </div>
                                <div className="custom-card">
                                    <h3>{this.state.currentUser.name}</h3>
                                    <p>{this.state.currentUser.email}</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )        
        } else {
            return (
                <h2>Usuario no encontrado</h2>
            )
        }
        
    }
}

export default InfoUser;