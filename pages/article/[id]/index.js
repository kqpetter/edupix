
import Link from 'next/link'
import Image from "next/image"
import { useRouter } from 'next/router'
import { server } from '../../../config'
import styles from '../../../styles/Resource.module.css'
import Cc from '../../../components/icons/CcLicense'


const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
    <div className={styles.container}>
      <div className={styles.main}>
        <a className={styles.card} >
            <h3>{article.title} </h3>
            <div className="pt-2" style={{  position: 'relative', width: '60vw', height: '30vw'}}>
              {article.image === "" ? 
                <Image src="/resourses/images/headphones.png" alt={article.title} layout="fill" objectFit="cover"/>
              : null}
              {article.image !== "" ? 
                  <Image src={article.image} alt={article.title} layout="fill" objectFit="cover"/>
              : null}
            </div>
            {article.audio !== "" ? 
              <div className={styles.audio}>
                <audio controls>
                  <source align="left" src={article.audio}/>
                </audio>
              </div> 
            : null }
            <p>Publisher: {article.publisher}</p>
            <p>Author: {article.author}</p>
            <p>Topic: {article.educationalrole}</p>
            <div className={styles.audio}>
              <Cc data={article} />
            </div>
        </a>
        <Link href='/search/'>Go Back</Link>
      </div>
    </div>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

/* export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
} */



export default article