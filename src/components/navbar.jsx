import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import { BiHome, BiLogOut } from "react-icons/bi";
import RegisterCowForm from "./forms/registerCowForm";
import Home from "./home";

const { Header, Content, Footer, Sider } = Layout;

function Navbar(props) {
   const [collapsed, setCollapsed] = useState(false);
   const [tabSelected, setTabSelected] = useState("1");

   const firebase = useFirebaseApp();
   const history = useHistory();

   function onCollapse() {
      setCollapsed(!collapsed);
   }

   function changeTab(e) {
      setTabSelected(e.key);
   }

   const closeSesion = async () => {
      await firebase
         .auth()
         .signOut()
         .then(function (response) {
            if (response === undefined) {
               setTimeout(() => {
                  history.push("/");
               }, 200);
            }
         })
         .catch(function (error) {
            console.log(error);
         });
   };

   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
               <Menu.Item key="1" icon={<BiHome />} onClick={changeTab}>
                  Inicio
               </Menu.Item>
               <Menu.Item key="2" icon={<BiHome />} onClick={changeTab}>
                  Ingresar registro
               </Menu.Item>
               <Menu.Item key="3" icon={<BiLogOut />} onClick={closeSesion}>
                  Cerrar sesión
               </Menu.Item>
            </Menu>
         </Sider>
         <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
               <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
               >
                  {tabSelected === "1" ? (
                     <Home />
                  ) : tabSelected === "2" ? (
                     <RegisterCowForm />
                  ) : (
                     ""
                  )}
               </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
               Control Ganado Vacuno ©2021 created with ❤ by Edwin Villa
            </Footer>
         </Layout>
      </Layout>
   );
}

export default Navbar;
