import React, {Component} from 'react';
import User from './User';
import { Row } from 'antd';

class UserList extends Component {
    construtctor () {
        this._onDeleteUser = this._onDeleteUser.bind(this);
    }
    render () {        
        return (            
            <div style={{ padding: '30px' }}>
                <Row type="flex" justify="center">
                { this.props.users.map( user => 
                    <User 
                        key={user.id}
                        { ...user }                
                        onDelete={this.props.onDelete}
                    />
                ) }
                </Row>
            </div>
        )
    }

}

export default UserList;