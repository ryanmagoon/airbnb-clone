import { Button, Form, Icon, Input } from 'antd'
import { FormikErrors, FormikProps, withFormik } from 'formik'
import * as React from 'react'

const FormItem = Form.Item

interface FormValues {
  email: string
  password: string
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>
}

export default class C extends React.PureComponent<
  FormikProps<FormValues> & Props
> {
  render() {
    const { handleBlur, handleChange, handleSubmit, values } = this.props
    return (
      <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
        <div style={{ margin: 'auto', width: 400 }}>
          <FormItem>
            <Input
              name="email"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem>
            <Input
              name="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
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
      </form>
    )
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors)
    }
  },
  mapPropsToValues: () => ({ email: '', password: '' })
})(C)
