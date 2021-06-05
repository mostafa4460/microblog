import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Typography, TextField, Button} from '@material-ui/core';
import './PostForm.css';

const PostForm = ({initialForm, title}) => {
    const [form, setForm] = useState(initialForm);
    const history = useHistory();
    const cancel = () => history.push('/');
    const handleChange = e => {
        const {name, value} = e.target;
        setForm(oldData => ({ ...oldData, [name]: value }));
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
                <Button variant="contained" color="primary">
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