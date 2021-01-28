const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const { auth } = require('../auth/auth');
import * as Types from '../../commons/Types';

const url = 'mongodb://localhost:27017';
let db = null;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(url, {
    auth: auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('blogWithTypeScript');
};

const fetchAllPosts = async () => {
  try {
    return await db.collection('blogPosts').find().toArray();
  } catch (e) {
    console.log(e);
  }
};

const fetchOnePostById = async (postID: string) => {
  try {
    return await db.collection('blogPosts').find({ _id: ObjectId(postID) });
  } catch (e) {
    console.log(e);
  }
};

const addOnePost = async (newBlogPost: Types.IBlogPost) => {
  try {
    const { addConfirmation } = await db
      .collection('blogPosts')
      .insertOne(newBlogPost);
    const { postCategories, postTags } = newBlogPost;
    await db.collection('blogCategories').insertMany(postCategories);
    await db.collection('blogTags').insertMany(postTags);
    return addConfirmation;
  } catch (e) {
    console.log(e);
  }
};

const updateOnePost = async (postID: string, blogPost: Types.IBlogPost) => {
  try {
    return await db
      .collection('blogPosts')
      .updateOne({ _id: ObjectId(postID) }, { $set: blogPost });
  } catch (e) {
    console.log(e);
  }
};

const deleteOnePost = async (postID: string) => {
  try {
    return await db
      .collection('blogPosts')
      .deleteOne({ _id: ObjectId(postID) });
  } catch (e) {
    console.log(e);
  }
};

const fetchAllCategoriesAndTags = async () => {
  try {
    const { allCategories } = await db
      .collection('blogCategories')
      .find()
      .toArray();
    const { allTags } = await db.collection('blogTags').find().toArray();
    const blogCategoriesAndTags = { allCategories, allTags };
    return blogCategoriesAndTags;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  initializeDatabase,
  fetchAllPosts,
  fetchOnePostById,
  addOnePost,
  updateOnePost,
  deleteOnePost,
  fetchAllCategoriesAndTags,
};
