import { server } from '../../../config'
import ArticleList from '../../../components/article/ArticleList'
import styles from '../../../styles/Resource.module.css'

const topic = ({parent, articles}) => {
   
  
    return (
      <div className={styles.container}>
       <h2>{parent.title}</h2>
       <ArticleList articles={articles} key={articles.id}/>
      </div>
    )
  }
  export const getServerSideProps = async (context) => {
  
    const resParent = await fetch(`${server}/api/topics/${context.params.id}`)
    const parent = await resParent.json()

    const resArticles = await fetch(`${server}/api/topics/articles/${context.params.id}`)
    const articles = await resArticles.json()
    

    return {
      props: {
        parent,
        articles,
      },
    }
  }
  export default topic