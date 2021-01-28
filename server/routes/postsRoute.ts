const router = require('express').Router();
const PostsCtrl = require('../controllers/PostsController');

router.get('/', PostsCtrl.getAllPosts);

router.get('/:postID', PostsCtrl.getOneBlogPostByID);

router.post('/', PostsCtrl.addOneBlogPost);

router.put('/:postID', PostsCtrl.updateOneBlogPost);

router.delete('/:postID', PostsCtrl.deleteOneBlogPost);

module.exports = router;
