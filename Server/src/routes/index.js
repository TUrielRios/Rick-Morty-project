const { getCharById } = require('../controllers/getCharById');
const login = require('../controllers/login')
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFavs')
const deleteFav = require('../controllers/deleteFav')


const router = require('express').Router();

router.get('/character/:id', login);

router.get('/login', postUser);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);

router.get('/character/:id', getCharById);


router.get('/character/:id', (req, res)=>{
    getCharById(req,res);
})

router.get ('/login', login);

router.post('/fav',(req,res) => {
    postFav(req,res);
})

router.delete('/fav/:id', (req,res) => {
    deleteFav(req,res);
})

module.exports = router;