

import TopList from '../../components/topics/TopList'
import { server } from '../../config'
import styles from '../../styles/Resource.module.css'


const topic = ({topics}) => {
    
    return (
        <div className={styles.container}>
            <TopList topics={topics} key={topics.id}/>
        </div>
    )
}


export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/topics/children/0`)
    const topics = await res.json()
    

    return {
      props: {
        topics,
      },
    }
  }
/*
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/topics/${context.params.id}`)
  
    const topic = await res.json()
  
    return {
      props: {
        topic,
      },
    }
  }
  
  
  export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/topics`)
  
    const topics = await res.json()
  
    const ids = topics.map((topic) => topic.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
    return {
      paths,
      fallback: false,
    }
  }*/

export default topic