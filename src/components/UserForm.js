import React, {Component} from 'react'; 
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;


class UserForm extends Component {
    render () {
        return (
            <div className="UserForm">
                <Form layout="inline" onSubmit={this.props.onAddUser}>
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="name" name="name" required />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} type="email" placeholder="email" name="email" required />
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            New user
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default UserForm;