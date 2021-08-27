//import { articles } from '../../../images'
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://christer:Ice278787@oerdev.bqfcd.mongodb.net/assessment?retryWrites=true&w=majority" //process.env.MONGODB_URI
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
export default function handler({ query: { title } }, res) {
    async function findResultsUi() {


        const client = new MongoClient(uri, options);
        await client.connect();

        const cursor = client.db("edupix").collection("collection").find({ title: { $regex: title } })
        const results = await cursor.toArray();

        res.json(results);
        console.log(results);
        return;
    }

    findResultsUi().catch(console.error);

}