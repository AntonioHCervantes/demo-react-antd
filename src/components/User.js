import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Row, Card, Col, Button } from 'antd';

const optionStyleButton = {
    display: 'block',
    margin: '10px 0 0 0',
    width: '100%',
    borderColor: '#eee',
    borderRadius: '0',
    fontSize: '1rem'
}

class User extends Component {
    constructor () {
        super();
    }      
    render () {
        return (            
            <Col xs={{span:24}} sm={{span:10}} md={{span:6, offset:1}} lg={{span:5}} xl={{span:4}}>
                <Card bodyStyle={{ padding: 0 }} className="mb-30">
                    <div className="custom-image">
                       <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="custom-card">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.email}</p>
                        
                        <Row>
                            <Col span={12}>
                                <Button type="default" size="large" icon="delete" style={optionStyleButton} title="Delete user" onClick={() => this.props.onDelete(this.props.id)} />
                            </Col>
                            <Col span={12}>
                                <Link to={`/users/${this.props.id}`}>
                                <Button type="default" size="large" icon="schedule" style={optionStyleButton} title="View user"/>
                                </Link>
                            </Col>
                        </Row>
                            
                    </div>
                </Card>
            </Col>            
        )
    }

    /*_handler = () => {
        this.props.onDelete(this.props.id)
    }*/
}

export default User;