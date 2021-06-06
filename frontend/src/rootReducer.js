import {ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT} from './actionTypes';

const INITIAL_STATE = {
    1: { 
        title: "How to Become a Pokemon Master.", 
        description: "A step by step tutorial on how to become a pokemon master!", 
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla at volutpat diam ut. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Id ornare arcu odio ut sem nulla pharetra diam. Et leo duis ut diam quam. Eu lobortis elementum nibh tellus molestie nunc. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Posuere morbi leo urna molestie at elementum eu facilisis. Ac turpis egestas integer eget. At volutpat diam ut venenatis. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eu sem integer vitae justo eget magna fermentum iaculis eu. Venenatis lectus magna fringilla urna porttitor. Sed sed risus pretium quam vulputate dignissim. Nisl purus in mollis nunc sed id semper risus in. Curabitur gravida arcu ac tortor dignissim. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.",
        comments: {
            1: "I'm already a pokemon master you idiot!",
            2: "This was very helpful, thank you :)",
            3: "Gotta catch em all!!"
        }
    },
    2: {
        title: "Is The Office the Best Show to Ever Be Made?", 
        description: "10 Reasons why The Office is the best tv show.", 
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla at volutpat diam ut. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Id ornare arcu odio ut sem nulla pharetra diam. Et leo duis ut diam quam. Eu lobortis elementum nibh tellus molestie nunc. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Posuere morbi leo urna molestie at elementum eu facilisis. Ac turpis egestas integer eget. At volutpat diam ut venenatis. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eu sem integer vitae justo eget magna fermentum iaculis eu. Venenatis lectus magna fringilla urna porttitor. Sed sed risus pretium quam vulputate dignissim. Nisl purus in mollis nunc sed id semper risus in. Curabitur gravida arcu ac tortor dignissim. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.", 
        comments: {}
    },
    3: {
        title: "IDK, I Ran Out of Juice...", 
        description: "Should I take a break?", 
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla at volutpat diam ut. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Id ornare arcu odio ut sem nulla pharetra diam. Et leo duis ut diam quam. Eu lobortis elementum nibh tellus molestie nunc. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Posuere morbi leo urna molestie at elementum eu facilisis. Ac turpis egestas integer eget. At volutpat diam ut venenatis. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eu sem integer vitae justo eget magna fermentum iaculis eu. Venenatis lectus magna fringilla urna porttitor. Sed sed risus pretium quam vulputate dignissim. Nisl purus in mollis nunc sed id semper risus in. Curabitur gravida arcu ac tortor dignissim. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.", 
        comments: {}
    }
}
const rootReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                [action.id]: {...action.newPost, comments: {}}
            }
        case EDIT_POST:
            return {
                ...state,
                [action.id]: {
                    ...action.editedPost,
                    comments: {...state[action.id].comments}
                }
            };
        case DELETE_POST:
            const posts = {...state};
            delete posts[action.id];
            return posts;
        case ADD_COMMENT:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    comments: {
                        ...state[action.postId].comments,
                        [action.comment.id]: action.comment.msg
                    }
                }
            };
        case DELETE_COMMENT:
            const post = {
                ...state[action.postId],
                comments: {...state[action.postId].comments}
            };
            delete post.comments[action.commentId];
            return {
                ...state,
                [action.postId]: post
            }
        default:
            return state
    };
};

export default rootReducer;