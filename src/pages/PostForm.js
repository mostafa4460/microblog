import {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addPost, editPost} from '../actions';
import {v4 as uuid} from 'uuid';
import {Typography, TextField, Button} from '@material-ui/core';
import './PostForm.css';

const PostForm = ({initialForm, title, editing, setEditing}) => {
    const [form, setForm] = useState(initialForm);
    const history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();
    const handleChange = e => {
        const {name, value} = e.target;
        setForm(oldData => ({ ...oldData, [name]: value }));
    };
    const cancel = () => history.push('/');
    const addNewPost = () => {
        const newId = uuid();
        dispatch(addPost(newId, form));
        history.push('/');
    };
    const editExistingPost = () => {
        dispatch(editPost(id, form));
        setEditing(false);
    };

    return (
        <div className="PostForm">
            <Typography variant="h4" component="h2" color="primary">
                {title}
            </Typography>
            <form>
                <TextField 
                    required 
                    autoFocus 
                    fullWidth 
                    label="Title"
                    margin="normal"
                    variant="outlined"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                />
                <TextField 
                    required 
                    fullWidth 
                    label="Description"
                    margin="normal"
                    variant="outlined"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />
                <TextField 
                    required
                    fullWidth 
                    label="Body"
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={10}
                    name="body"
                    value={form.body}
                    onChange={handleChange} 
                />
                <Button variant="contained" color="primary" onClick={editing ? editExistingPost : addNewPost}>
                    Save
                </Button>
                <Button variant="contained" color="secondary" onClick={cancel}>
                    Cancel
                </Button>
            </form>
        </div>    
    );
};

export default PostForm;