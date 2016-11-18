import { Form, Icon, Input, Button, Checkbox,Carousel } from 'antd';
import React, { PropTypes } from 'react';
import styles from './Login.less';
const FormItem = Form.Item;
const Login = ({
  onLogin,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    },
  }) => {
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      onLogin(getFieldsValue());
    });
  }

  return (
    <div  className={styles.login_form1}>
      <Carousel autoplay className={styles.carousel}>
        <div> <img width={300} height={160} src="http://s10.sinaimg.cn/mw690/001UnzBvgy6UqD9GkJz39&690" /> </div>
        <div> <img width={300} height={160} src="http://s10.sinaimg.cn/mw690/001UnzBvgy6UqD9GkJz39&690" /> </div>
        <div> <img width={300} height={160} src="http://s10.sinaimg.cn/mw690/001UnzBvgy6UqD9GkJz39&690" /> </div>
      </Carousel>
      <Form onSubmit={handleSubmit} className={styles.login_form}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles.login_form_forgot}>Forgot password</a>
          <Button type="primary" htmlType="submit" className={styles.login_form_button}>
            Log in
          </Button>
          Or <a>register now!</a>
        </FormItem>
      </Form>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.object.isRequired,
  onLogin: PropTypes.func,
};

export default Form.create()(Login);
