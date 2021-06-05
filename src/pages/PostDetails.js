import {useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {Typography, IconButton, Divider} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import PostForm from './PostForm';
import Comments from '../components/Comments';
import './PostDetails.css';

const PostDetails = ({posts}) => {
    const [editing, setEditing] = useState(false);
    const history = useHistory();
    const {id} = useParams();
    const post = posts.find(p => p.id === +id);

    let component;
    if (!post) {
        history.push('/');
        component = null;
    } else if (editing === true) {
        const INITIAL_FORM = {title: post.title, description: post.description, body: post.body};
        component = <PostForm initialForm={INITIAL_FORM} title="Edit Post" />
    } else {
        component = (
            <>
                <div className="PostDetails-header">
                    <Typography variant="h4" component="h4" className="PostDetails-title">
                        {post.title}
                    </Typography>
                    <IconButton onClick={() => setEditing(true)}>
                        <Edit color="primary" fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <Delete color="secondary" fontSize="large" />
                    </IconButton>
                </div>
                <Typography component="p" className="PostDetails-description">
                    <em>{post.description}</em>
                </Typography>
                <Typography component="p">
                    {post.body}
                </Typography>
                <Divider className="PostDetails-divider" />
                <Comments comments={post.comments} />
            </>
        );
    };

    return component;
};

export default PostDetails;