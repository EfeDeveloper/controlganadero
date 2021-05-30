import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Row, Col, Button, Input, Card } from "antd";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import { BiLock, BiAt } from "react-icons/bi";

function Register() {
   const [form] = Form.useForm();
   const { Meta } = Card;
   const firebase = useFirebaseApp();
   const history = useHistory();

   const registerUser = async (values) => {
      const { email, password } = values;
      await firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(function (response) {
            if(response){
               history.push("/dashboard");
            }
         })
         .catch(function (error) {
            console.log(error);
         });
      form.resetFields();
   };

   return (
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
         <Col xs={20} sm={16} md={12} lg={8} xl={6}>
            <Card title="Bienvenid@s 👋" className="cardForms">
               <Form
                  form={form}
                  name="registerForm"
                  onFinish={registerUser}
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

                  <Form.Item
                     name="confirm"
                     dependencies={["password"]}
                     rules={[
                        {
                           required: true,
                           message: "Por favor confirma tu contraseña!",
                        },
                        ({ getFieldValue }) => ({
                           validator(_, value) {
                              if (!value || getFieldValue("password") === value) {
                                 return Promise.resolve();
                              }

                              return Promise.reject(
                                 new Error("Las dos contraseñas no coinciden!")
                              );
                           },
                        }),
                     ]}
                     hasFeedback
                  >
                     <Input.Password
                        className="InputFroms"
                        prefix={<BiLock className="site-form-item-icon" />}
                        placeholder="Confirmar contraseña"
                     />
                  </Form.Item>
                  <Meta
                     title={
                        <Form.Item>
                           <Button type="primary" htmlType="submit">
                              Registarse
                           </Button>
                        </Form.Item>
                     }
                     description={
                        <>
                           <h4>
                              O ingresar <Link to="/">Ahora!</Link>
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

export default Register;
