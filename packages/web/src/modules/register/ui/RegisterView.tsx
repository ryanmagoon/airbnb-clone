import { Button, Form, Icon, Input } from 'antd'
import * as React from 'react'

const FormItem = Form.Item

export default class RegisterView extends React.PureComponent {
  render() {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ margin: 'auto', width: 400 }}>
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          </FormItem>
          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="">login now!</a>
          </FormItem>
        </div>
      </div>
    )
  }
}
