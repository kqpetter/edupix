
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
         The service will be launched in beta November 10, 2021.        
        </p>
        
          <a className={styles.card}>
            <h2>The eduPix mission </h2>
            <p>eduPix is a currated collection of images, audio, illustrations and video that are context relevant for OER development. 
              In the initial version of eduPix we will focus on content for early greades.</p>
          </a>

          <a className={styles.card}>
            <h2>Who are we </h2>
            <p>The eduPix platform is developed with funding from the Norad(Norwegian Agency for Development) working in collaboration with a large group of content partners. All resources are released under a Creative Commons license.</p>
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


