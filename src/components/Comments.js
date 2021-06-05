import {useState} from 'react';
import {Typography, IconButton, TextField, Button} from '@material-ui/core';
import {Close} from '@material-ui/icons';

const Comments = ({comments}) => {
    const [input, setInput] = useState("");
    const handleChange = e => setInput(e.target.value);
    return (
        <>
            <Typography variant="h5" component="h5">
                Comments
            </Typography>
            {comments.map(({ id, msg }) => (
                <div key={id} style={{marginTop: "10px"}}>
                    <IconButton color="secondary" size="small">
                        <Close />
                    </IconButton>
                    <p style={{display: "inline"}}>{msg}</p>
                </div>
            ))}
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
            >Add</Button>
        </>
    );
};

export default Comments;