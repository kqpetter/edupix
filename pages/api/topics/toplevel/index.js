import { topics } from '../../../../topics'

export default function handler(req, res) {
    const filtered = topics.filter((topic) => topic.parent === 0)

    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res
            .status(404)
            .json({ message: `No top end topix the id of ${id} is not found` })
    }
}