import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addComment, deleteComment} from '../actions';
import {v4 as uuid} from 'uuid';
import {Typography, IconButton, TextField, Button} from '@material-ui/core';
import {Close} from '@material-ui/icons';

const Comments = ({comments, postId}) => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const handleChange = e => setInput(e.target.value);
    const addNewComment = () => {
        setInput("");
        dispatch(addComment(postId, uuid(), input));
    };
    const deleteExistingComment = commentId => dispatch(deleteComment(postId, commentId));

    const commentsJSX = [];
    for (let [key, value] of Object.entries(comments)) {
        let comment = (
            <div key={key} style={{marginTop: "10px"}}>
                <IconButton color="secondary" size="small" onClick={() => deleteExistingComment(key)}>
                    <Close />
                </IconButton>
                <p style={{display: "inline"}}>{value}</p>
            </div>
        );
        commentsJSX.push(comment);
    };

    return (
        <>
            <Typography variant="h5" component="h5">
                Comments
            </Typography>
            {commentsJSX}
            <TextField 
                required  
                fullWidth 
                label="New Comment"
                margin="normal"
                variant="outlined"
                size="small"
                value={input}
                onChange={handleChange}
            />
            <Button
                style={{marginTop: "10px"}} 
                color="primary" 
                variant="contained" 
                size="large"
                onClick={addNewComment}
            >Add</Button>
        </>
    );
};

export default Comments;