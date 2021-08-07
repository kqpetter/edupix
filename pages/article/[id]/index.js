
import Link from 'next/link'
import Image from "next/image"
import { useRouter } from 'next/router'
import { server } from '../../../config'
import styles from '../../../styles/Resource.module.css'



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
                <Image src={article.image} alt={article.name} layout="fill" objectFit="cover"/>
            </div>
            <p>{article.license}</p>
            <p>{article.publisher}</p>
        </a>
        <Link href='/search/'>Go Back</Link>
      </div>
    </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}



export default article