import { articles } from '../../../images'

export default function handler({ query: { id } }, res) {
    const filtered = articles.filter((article) => article.id == id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res
            .status(404)
            .json({ message: `Content with id of ${id} is not found` })
    }
}