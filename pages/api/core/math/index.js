import { coremath } from '../../../../coremath'

export default function handler(req, res) {
    //const filtered = corelit.filter((article) => article.topic == id)
    res.status(200).json(coremath)
}