import React from "react";
import { Link } from "react-router-dom"
import { Form, Row, Col, Button, Input, Card } from "antd";
import { BiLock, BiAt } from "react-icons/bi";

function LoginForm() {
   const [form] = Form.useForm();
   const { Meta } = Card;
   function onFinish(values) {
      console.log("Valores enviados", values);
   }
   return (
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
         <Col s={24} m={12} l={6} lg={4}>
            <Card title="Bienvenid@s 👋">
               <Form
                  form={form}
                  name="registerForm"
                  onFinish={onFinish}
                  scrollToFirstError
                  className="login-form"
               >
                  <Form.Item
                     name="email"
                     rules={[
                        {
                           type: "email",
                           message: "Ingresa un correo valido",
                        },
                        {
                           required: true,
                           message: "Por favor ingresa tu correo!",
                        },
                     ]}
                     hasFeedback
                  >
                     <Input
                        className="InputFroms"
                        prefix={<BiAt className="site-form-item-icon" />}
                        placeholder="Correo"
                     />
                  </Form.Item>
                  <Form.Item
                     name="password"
                     rules={[
                        {
                           required: true,
                           message: "Por favor ingresa tu contraseña!",
                        },
                     ]}
                     hasFeedback
                  >
                     <Input.Password
                        className="InputFroms"
                        prefix={<BiLock className="site-form-item-icon" />}
                        placeholder="Contaseña"
                     />
                  </Form.Item>
                  <Meta
                     title={
                        <Form.Item>
                           <Button type="primary" htmlType="submit">
                              Ingresar
                           </Button>
                        </Form.Item>
                     }
                     description={
                        <>
                           <h4>
                              O Registrase <Link to="/register">Ahora!</Link>
                           </h4>
                        </>
                     }
                  />
               </Form>
            </Card>
         </Col>
      </Row>
   );
}

export default LoginForm;
