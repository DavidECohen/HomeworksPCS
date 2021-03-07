const express = require('express');
const app = express();
const path = require('path');
var ObjectId = require('mongodb').ObjectID;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

let posts;
(async() => {
    await client.connect();
    const db = client.db('blogs');
    posts = db.collection('posts');
})().catch(err => console.error(err));

app.locals.title = 'PCS MERN Blog'

app.get('/', async(req, res, next) => {

    const thePosts = await posts.find().toArray();
    res.render('layout', {
        subtitle: 'Blog Posts',
        links: [{ url: '/addPost', name: 'add post' }],
        postLinks: [{ url: '/addcomment', name: 'add comment' }],
        posts: thePosts,
        partials: { content: 'posts' }
    });
});

app.route('/addPost')
    .get((req, res, next) => {
        res.render('layout', {
            subtitle: 'Add Post',
            links: [{ url: '/', name: 'home' }],
            partials: { content: 'addPost' }
        });
    })
    .post(async(req, res, next) => {
        const post = {
            title: req.body.title,
            body: req.body.body,
            date: new Date(),
            author: 'me',
            id: req.body.id

        };
        console.log(id);
        await posts.insertOne(post);
        res.redirect('/');
    });

app.route('/addcomment')
    .get((req, res, next) => {
        res.render('layout', {
            subtitle: 'add comment',
            links: [{ url: '/', name: 'home' }],
            partials: { content: 'comments' },
            id: req.body.id
        });
    })
    .post(async(req, res, next) => {
        const comment1 = {
            title: req.body.title,
            comment: req.body.comment2,
            date: new Date(),
            author: 'you',

        };
        posts.updateOne({
            _id: ObjectId("604509686699e55de8263da9")
        }, {
            $push: {
                comments: comment1
            }
        });





        // await posts.updateOne({ _id: mongo.ObjectId("604509686699e55de8263da9") }, {
        //     $push: {
        //         comments: comment1
        //     }
        // });
        // await posts.insertOne(comment1);
        res.redirect('/');
    });



app.listen(80);