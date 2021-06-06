import {useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {deletePost} from '../actions';
import {Typography, IconButton, Divider} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import PostForm from './PostForm';
import Comments from '../components/Comments';
import './PostDetails.css';

const PostDetails = ({posts}) => {
    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const post = useSelector(state => state[id], shallowEqual);
    const deleteExistingPost = () => {
        dispatch(deletePost(id));
        history.push('/');
    };

    let component;
    if (!post) {
        history.push('/');
        component = null;
    } else if (editing === true) {
        const INITIAL_FORM = {title: post.title, description: post.description, body: post.body};
        component = <PostForm initialForm={INITIAL_FORM} title="Edit Post" editing={editing} setEditing={setEditing} />
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
                    <IconButton onClick={deleteExistingPost}>
                        <Delete color="secondary" fontSize="large"  />
                    </IconButton>
                </div>
                <Typography component="p" className="PostDetails-description">
                    <em>{post.description}</em>
                </Typography>
                <Typography component="p">
                    {post.body}
                </Typography>
                <Divider className="PostDetails-divider" />
                <Comments comments={post.comments} postId={id} />
            </>
        );
    };

    return component;
};

export default PostDetails;