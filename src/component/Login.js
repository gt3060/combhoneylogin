import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import '../css/App.css';

const FormItem = Form.Item;

function Login(props) {
  const  { getFieldDecorator }  = props.form;

  const handleSubmit = (e)=>{
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('接收的值: ', values);
        props.history.push({
          pathname:'index'
        })
        
        localStorage.setItem('LoginValue',JSON.stringify([
          {name:values.usrnam},
          {pwd:values.usrpwd}
        ]))
      }
    });
  }

  return (
    <div className="App">
      <div className="App-header">
        <Form onSubmit={handleSubmit}>
          <FormItem >
              {getFieldDecorator('usrnam', {
                  rules: [{ required: true, message: "请输入用户名", whitespace: true }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" style={{width:"270px"}}/>
              )}
          </FormItem>
          <FormItem >
              {getFieldDecorator('usrpwd', {
                  rules: [{ required: true, message: "请输入密码", whitespace: true }],
              })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="请输入密码" style={{width:"270px"}}/>
              )}
          </FormItem>
          <FormItem>
              <Button type="primary" htmlType="submit" >
                  登录
              </Button>
          </FormItem>
        </Form>
        
      </div>
    </div>
  );
}

const MyForm = Form.create()(Login);
export default MyForm;

