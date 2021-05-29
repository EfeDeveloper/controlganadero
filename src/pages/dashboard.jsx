import React from "react";
import { Col, Row } from "antd";
import Navbar from "../components/navbar";

const Dashboard = (props) => {
   return (
      <>
         <Row>
            <Col xs={24}>
               <Navbar />
            </Col>
         </Row>
      </>
   );
};

export default Dashboard;
