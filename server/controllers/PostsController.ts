const BlogStore = require('../store/BlogStore');
import * as Types from '../../commons/Types';

const getAllPosts = async (req, res) => {
  const allPosts: Types.IBlogPost[] = [];
  return res.send(allPosts);
};

const getOneBlogPostByID = async (req, res) => {
  const postId: string = req.params.postID;
//   const blogPost: Types.IBlogPost = {};
//   return res.json(blogPost);
};

const addOneBlogPost = async (req, res) => {
  const newBlogPost: Types.IBlogPost = req.body;
  const addConfirmation = '';
  return res.send(addConfirmation);
};

const updateOneBlogPost = async (req, res) => {
  const postId: string = req.params.postID;
//   const blogPost: Types.IBlogPost = {};
  const updateConfirmation = '';
  return res.send(updateConfirmation);
};

const deleteOneBlogPost = async (req, res) => {
  const postId: string = req.params.postID;
  const deleteConfirmation = '';
  return res.send(deleteConfirmation);
};
