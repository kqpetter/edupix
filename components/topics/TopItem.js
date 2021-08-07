import Link from 'next/link'
import articleStyles from '../../styles/Article.module.css'

const TopItem = ({ topic }) => {
  return (
    <Link href={`/toplevel/topics/${topic.id}`}>
      <a className={articleStyles.card}>
        <h3>{topic.title} &rarr;</h3>
        
      </a>
    </Link>
  )
}

export default TopItem