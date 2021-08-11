import { corereading } from '../../../../corereading'

export default function handler({ query: { id } }, res) {
    const filtered = corereading.filter((reading) => reading.levelid == parseInt(id))

    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res
            .status(404)
            .json({ message: `No articles with topic id of ${id} is not found` })
    }
}