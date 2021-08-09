
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function Aboutapi() {
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
         The eduPix API and collection will be launched in beta November 10, 2021.       
        <br/>These API endpoints are samples and not production ready.
        </p>
        
          <a href="https://www.edupix.io/api/language/en" className={styles.card}>
            <h2>Learning objects</h2>
            <p>This sample endpoint will return all objects in English. At the time of launch eduPix will have resources in 50+ languages.</p>
          </a>

          <a href="https://edupix.io/api/topics/" className={styles.card}>
            <h2>Topics</h2>
            <p>Sample endpoint returing all topics in our ontology.</p>
        </a>

         
       

        
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


