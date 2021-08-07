import Link from 'next/link'
import articleStyles from '../../styles/Article.module.css'

const TopicItem = ({ topic }) => {
  return (
    <Link href={`/topic/${topic.id}`}>
      <a className={articleStyles.card}>
        <h3>{topic.title} &rarr;</h3>
        
      </a>
    </Link>
  )
}

export default TopicItem