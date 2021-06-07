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

const INITIAL_STATE = {titles: [], posts: {}}
const rootReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GOT_TITLES:
            return {
                ...state,
                titles: action.titles,
                posts: {...state.posts}
            };
        case GOT_POST:
            return {
                ...state,
                title: [...state.titles],
                posts: {
                    ...state.posts,
                    [action.post.id]: action.post
                }
            };
        case ADDED_POST:
            return {
                ...state,
                titles: [
                    ...state.titles,
                    {
                        id: action.post.id, 
                        title: action.post.title, 
                        description: action.post.description,
                        votes: action.post.votes
                    }
                ],
                posts: {
                    ...state.posts,
                    [action.post.id]: {...action.post, comments: []}
                }
            };
        case EDITED_POST:
            return {
                ...state,
                titles: state.titles.map(title => {
                    if (title.id === action.post.id) {
                        return ({
                            id: action.post.id,
                            title: action.post.title,
                            description: action.post.description,
                            votes: action.post.votes
                        })
                    } else {
                        return title
                    }
                }),
                posts: {
                    ...state.posts,
                    [action.post.id]: {
                        ...action.post,
                        comments: [...state.posts[action.post.id].comments]
                    }
                }
            };
        case DELETED_POST:
            const newPosts = {...state.posts};
            delete newPosts[action.id];
            return {
                ...state,
                titles: state.titles.filter(title => title.id !== action.id),
                posts: newPosts
            };
        case ADDED_COMMENT:
            return {
                ...state,
                titles: [...state.titles],
                posts: {
                    ...state.posts,
                    [action.postId]: {
                        ...state.posts[action.postId],
                        comments: [
                            ...state.posts[action.postId].comments,
                            action.comment
                        ]
                    }
                }
            };
        case DELETED_COMMENT:
            return {
                ...state,
                titles: [...state.titles],
                posts: {
                    ...state.posts,
                    [action.postId]: {
                        ...state.posts[action.postId],
                        comments: state.posts[action.postId].comments.filter(comment => comment.id !== action.commentId)
                    }
                }
            };
        case CHANGED_VOTE:
            return {
                ...state,
                titles: state.titles.map(title => {
                    if (title.id === action.postId) {
                        return {
                            ...title,
                            votes: action.votes
                        }
                    } else {
                        return title
                    }
                }),
                posts: {
                    ...state.posts,
                    [action.postId]: {
                        ...state.posts[action.postId],
                        votes: action.votes
                    }
                }
            };
        default:
            return state
    };
};

export default rootReducer;