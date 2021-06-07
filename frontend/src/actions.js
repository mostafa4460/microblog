import axios from 'axios';
import {
    GOT_TITLES,
    GOT_POST,
    ADDED_POST, 
    EDITED_POST, 
    DELETED_POST,
    ADDED_COMMENT,
    DELETED_COMMENT,
    CHANGED_VOTE
} from './actionTypes';

const BASE_URL = "http://localhost:5000/api/posts";

export const getTitles = () => {
    return async function (dispatch) {
        const {data} = await axios.get(BASE_URL);
        dispatch(gotTitles(data));
    };
};

const gotTitles = titles => ({
    type: GOT_TITLES,
    titles
});

export const addPost = newPostForm => {
    return async function (dispatch) {
        const {data} = await axios.post(BASE_URL, newPostForm);
        dispatch(addedPost(data));
    };
};

const addedPost = post => {
    return {
        type: ADDED_POST,
        post
    };
};

export const getPost = id => {
    return async function (dispatch) {
        const {data} = await axios.get(`${BASE_URL}/${id}`);
        dispatch(gotPost(data));
    };
};

const gotPost = post => ({
    type: GOT_POST,
    post
});

export const deletePost = id => {
    return async function (dispatch) {
        await axios.delete(`${BASE_URL}/${id}`);
        dispatch(deletedPost(id));
    };
};

const deletedPost = id => ({
    type: DELETED_POST,
    id
});

export const editPost = (id, editPostForm) => {
    return async function (dispatch) {
        const {data} = await axios.put(`${BASE_URL}/${id}`, editPostForm);
        dispatch(editedPost(data));
    };
};

const editedPost = post => ({
    type: EDITED_POST,
    post
});

export const addComment = (id, newCommentForm) => {
    return async function (dispatch) {
        const {data} = await axios.post(`${BASE_URL}/${id}/comments`, newCommentForm);
        dispatch(addedComment(id, data));
    };
};

const addedComment = (postId, comment) => ({
    type: ADDED_COMMENT,
    postId,
    comment
});

export const deleteComment = (postId, commentId) => {
    return async function (dispatch) {
        await axios.delete(`${BASE_URL}/${postId}/comments/${commentId}`);
        dispatch(deletedComment(postId, commentId));
    };
};

const deletedComment = (postId, commentId) => ({
    type: DELETED_COMMENT,
    postId,
    commentId
});

export const changeVote = (postId, direction) => {
    return async function (dispatch) {
        const {data} = await axios.post(`${BASE_URL}/${postId}/vote/${direction}`);
        dispatch(changedVote(postId, data.votes));
    };
};

const changedVote = (postId, votes) => ({
    type: CHANGED_VOTE,
    postId,
    votes
});