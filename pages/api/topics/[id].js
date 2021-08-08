import { topics } from '../../../topics'

export default function handler({ query: { id } }, res) {
    const filtered = topics.filter((topic) => topic.id == id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res
            .status(404)
            .json({ message: `Topc with the id of ${id} is not found` })
    }
}