import TopItem from './TopItem'
import articleStyles from '../../styles/Article.module.css'

const TopList = ({ topics }) => {
  return (
    <div className={articleStyles.grid}>
      {topics.map((topic) => (
        <TopItem topic={topic} id={topic.id} />
      ))}
    </div>
  )
}

export default TopList