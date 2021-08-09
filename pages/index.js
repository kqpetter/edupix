import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
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
          The eduPix collection will be launched in November 2021.
        </p>

        <div className={styles.grid}>
          <a href="https://edupix.io/api/articles" className={styles.card}>
            <h2>Test our API &rarr;</h2>
            <p>We are still working on it but if you are curious you can test our API.</p>
          </a>

          <a href="https://edupix.io/about" className={styles.card}>
            <h2>Learn more about eduPix&rarr;</h2>
            <p>Learn about eduPix.io and our project!</p>
          </a>

         
        </div>
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
