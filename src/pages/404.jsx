import React from "react";
import { useHistory } from "react-router-dom";
import { Result, Button, Card, Col, Row } from "antd";
import PageNotFoundImg from "../assets/img/404.png";

function PageNotFound(props) {
   const history = useHistory();
   function redirect() {
      history.push("/");
   }
   return (
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
         <Col>
            <Card>
               <Result
                  icon={<img src={PageNotFoundImg} alt="404" style={{ width: "40%" }} />}
                  title={<h2>404</h2>}
                  subTitle={<h3>¡Lo sentimos, la página que buscas no está existe!</h3>}
                  extra={
                     <Button onClick={redirect} type="primary">
                        Regresar a una página existente
                     </Button>
                  }
               />
            </Card>
         </Col>
      </Row>
   );
}

export default PageNotFound;
