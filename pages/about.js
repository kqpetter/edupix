
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eduPix.io</title>
        <meta name="edupix" content="open educational resources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://edupix.io">eduPix.io</a>
        </h1>

        <p className={styles.description}>
          The eduPix collection will contain images, audio, illustrations relevant for OER development and will be launched in November 2021.
        </p>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://oer.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {' '}
          <span>
            OER.dev
          </span>
        </a>
      </footer>
    </div>
  )
}


