import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import  { Toaster } from 'react-hot-toast';
const Layouts = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
            </Helmet>
            <Header>

            </Header>

            <main style={{ minHeight: "70vh" }}>{children}</main>
            <Toaster />

            <Footer />

        </div>
    )
};

Layouts.defaultProps = {
    title: 'Ecommerce app',
    description: 'mern stack project ',
    keywords : 'mern,react,node,mongodb'
}

export default Layouts



// This is parent component 