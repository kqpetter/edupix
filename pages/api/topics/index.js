import { topics } from '../../../topics'

export default function handler(req, res) {
    res.status(200).json(topics)
}