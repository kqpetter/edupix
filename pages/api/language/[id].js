import { articles } from '../../../images'

export default function handler({ query: { id } }, res) {
    const found = articles.some(article => article.inlanguage == id);

    if (found) {
        res.json(articles.filter(function(obj) {
            return obj.inlanguage == id;
        }));
    } else {
        res.status(400).json({ msg: "Language not found" });
    }
}