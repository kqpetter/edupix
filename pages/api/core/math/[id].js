import { coremath } from '../../../../coremath'

export default function handler({ query: { id } }, res) {
    const filtered = coremath.filter((math) => math.grade == parseInt(id))

    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res
            .status(404)
            .json({ message: `No articles with topic id of ${id} is not found` })
    }
}