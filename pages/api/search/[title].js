import { articles } from '../../../images'

export default function handler({ query: { title } }, res) {
    let matches = articles.filter(article => {
        const regex = new RegExp(`${title}`, 'gi');
        return article.title.match(regex);
    });

    if (matches) {
        res.json(matches);
    } else {
        res.status(400).json({ msg: "No images not found" });
    }
}