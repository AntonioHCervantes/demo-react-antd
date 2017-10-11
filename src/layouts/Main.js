import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Users from '../pages/Users';
import InfoUser from '../pages/InfoUser';

import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;

class Main extends Component{

    render () {
        return (
            <Layout>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <main>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/users' component={Users}/>
                            <Route path='/users/:id' component={InfoUser}/>
                        </Switch>
                    </main>
                </Content>            
            </Layout>
        )
    }
}

export default Main;