const BlogStore = require('../store/BlogStore');
import * as Types from '../../commons/Types';

const getAllPosts = async (req, res) => {
  const allPosts: Types.IBlogPost[] = await BlogStore.fetchAllPosts();
  return res.send(allPosts);
};

const getOneBlogPostByID = async (req, res) => {
  const postID: string = req.params.postID;
  const blogPost: Types.IBlogPost = await BlogStore.fetchOnePostById(postID);
  return res.json(blogPost);
};

const addOneBlogPost = async (req, res) => {
  const newBlogPost: Types.IBlogPost = req.body;
  const addConfirmation = await BlogStore.addOnePost(newBlogPost);
  return res.send(addConfirmation);
};

const updateOneBlogPost = async (req, res) => {
  const postID: string = req.params.postID;
  const updatedBlogPost: Types.IBlogPost = req.body;
  const updateConfirmation = await BlogStore.updateOnePost(
    postID,
    updatedBlogPost
  );
  return res.send(updateConfirmation);
};

const deleteOneBlogPost = async (req, res) => {
  const postID: string = req.params.postID;
  const deleteConfirmation = await BlogStore.deleteOnePost(postID);
  return res.send(deleteConfirmation);
};

module.exports = {
  getAllPosts,
  getOneBlogPostByID,
  addOneBlogPost,
  updateOneBlogPost,
  deleteOneBlogPost,
};
