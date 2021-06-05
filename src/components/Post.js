import {useHistory} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import './Post.css';

const Post = ({id, title, description}) => {
    const history = useHistory();

    return (
        <div className="Post" onClick={() => history.push(`/${id}`)} >
            <Typography variant="h6" component="h6" color="primary">
                {title}
            </Typography> 
            <Typography component="em">
                {description}
            </Typography> 
        </div>
    );
};

export default Post;