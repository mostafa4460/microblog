import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addComment, deleteComment} from '../actions';
import {Typography, IconButton, TextField, Button} from '@material-ui/core';
import {Close} from '@material-ui/icons';

const Comments = ({comments, postId}) => {
    const [input, setInput] = useState({text: ""});
    const dispatch = useDispatch();
    const handleChange = e => setInput({text: e.target.value});
    const addNewComment = () => {
        dispatch(addComment(postId, input));
        setInput({text: ""});
    };
    const deleteExistingComment = commentId => dispatch(deleteComment(postId, commentId));

    return (
        <>
            <Typography variant="h5" component="h5">
                Comments
            </Typography>
            {comments.map(({ id, text }) => (
                <div key={id} style={{marginTop: "10px"}}>
                    <IconButton color="secondary" size="small" onClick={() => deleteExistingComment(id)}>
                        <Close />
                    </IconButton>
                    <p style={{display: "inline"}}>{text}</p>
                </div>
            ))}
            <TextField 
                required  
                fullWidth 
                label="New Comment"
                margin="normal"
                variant="outlined"
                size="small"
                value={input.text}
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