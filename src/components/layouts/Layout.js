import React from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'

const Layout = ({children,title="List of the countries"}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.footer}>
                Header Page
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/pustian-rafiq"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  
                    <span className={styles.logo}>
                    Powered by Md. Rafiqul Islam
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Layout