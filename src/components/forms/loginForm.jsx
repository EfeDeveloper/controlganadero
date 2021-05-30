import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Row, Col, Button, Input, Card } from "antd";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import { BiLock, BiAt } from "react-icons/bi";

function LoginForm() {
   const [form] = Form.useForm();
   const { Meta } = Card;
   const firebase = useFirebaseApp();
   const history = useHistory();

   const loginUser = async (values) => {
      const { email, password } = values;
      await firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(function (response) {
            if (response) {
               history.push("/dashboard");
            }
         })
         .catch(function (error) {
            console.log(error);
            if (error.code === "auth/user-not-found") {
               console.log("El usuarion no existe");
            } else if (error.code === "auth/wrong-password") {
               console.log("Contraseña incorrecta");
            } else {
               console.log("Error del servidor");
            }
         });
   };

   return (
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
         <Col xs={20} sm={16} md={12} lg={8} xl={6}>
            <Card title="Bienvenid@s 👋">
               <Form
                  form={form}
                  name="registerForm"
                  onFinish={loginUser}
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
                        {
                           pattern: new RegExp(
                              "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
                           ),
                           message:
                              "Mínimo 8 caracteres, una letra mayúscula, un carácter especial, letras minúsculas y números!",
                        },
                        {
                           whitespace: true,
                           message: "No se admiten espacios en blanco",
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
