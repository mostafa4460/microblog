import {ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT} from './actionTypes';

export const addPost = (id, newPost) => {
    return {
        type: ADD_POST,
        id,
        newPost
    };
};

export const editPost = (id, editedPost) => {
    return {
        type: EDIT_POST,
        id,
        editedPost
    };
};

export const deletePost = id => {
    return {
        type: DELETE_POST,
        id
    };
};

export const addComment = (postId, id, msg) => {
    return {
        type: ADD_COMMENT,
        postId,
        comment: {
            id,
            msg
        }
    };
};

export const deleteComment = (postId, commentId) => {
    return {
        type: DELETE_COMMENT,
        postId,
        commentId
    };
};