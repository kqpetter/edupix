
import TopicList from '../../../../components/topics/TopicList'
import { server } from '../../../../config'
import styles from '../../../../styles/Resource.module.css'

//{topic.title}
const topic = ({parent, topics}) => {
    
    return (
        <div className={styles.container}>
            <h2>{parent.title}</h2>
            <TopicList topics={topics}/>
        </div>
    )
}


export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/topics/children/${context.params.id}`)
    const topics = await res.json()
  
    const resParent = await fetch(`${server}/api/topics/${context.params.id}`)
    const parent = await resParent.json()
    

    return {
      props: {
        topics,
        parent,
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