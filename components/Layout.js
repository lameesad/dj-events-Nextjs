import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css';

export default function layout({ title, keywords, description, children }) {

    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />

            {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

layout.defaultProps = {
    title: 'DJ Events FInd the hottest parties',
    description: 'Find the latest DJ and other events',
    keywords: 'music,dj,edm,events'

}