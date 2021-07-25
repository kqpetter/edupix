import { articles } from '../../../images'

export default function handler(req, res) {
    res.status(200).json(articles)
}