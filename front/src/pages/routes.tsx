import { Routes, Route, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from 'antd';
import React from 'react';
import Home from "./home/home.";

const { Content, Footer } = Layout;

const App: React.FC = () => {
    
    return (
        <Layout>
            <Content className="site-layout" style={{ padding: '0 15px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />               
                </Routes>
            </Content>
            <Footer style={{ position:'fixed',bottom:0, textAlign: 'center', width: '100vw'  }}>Develop Marcelo Gonçalves B Costa  ©2023</Footer>
        </Layout>
    );
};

export default App;

