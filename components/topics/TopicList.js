import TopicItem from './TopicItem'
import articleStyles from '../../styles/Article.module.css'

const TopicList = ({ topics }) => {
  return (
    <div className={articleStyles.grid}>
      {topics.map((topic) => (
        <TopicItem topic={topic} key={topic.id} />
      ))}
    </div>
  )
}

export default TopicList