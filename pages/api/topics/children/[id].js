import { topics } from '../../../../topics'

export default function handler({ query: { id } }, res) {
    const filtered = topics.filter((topic) => topic.parent == parseInt(id))

    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res
            .status(404)
            .json({ message: `No topics with parent id of ${id} is not found` })
    }
}