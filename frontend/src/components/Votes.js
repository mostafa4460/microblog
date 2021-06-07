import {useDispatch} from 'react-redux';
import {changeVote} from '../actions';
import {Typography, IconButton} from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons';
import './Votes.css';

const Votes = ({postId, votes}) => {
    const dispatch = useDispatch();
    const upVote = () => dispatch(changeVote(postId, 'up'));
    const downVote = () => dispatch(changeVote(postId, 'down'));

    return (
        <Typography variant="subtitle1">
            <b>{votes} votes</b>
            <IconButton size="small" className="Votes-up-btn" onClick={upVote}>
                <ThumbUp className="Votes-up" />
            </IconButton>
            <IconButton size="small" onClick={downVote}>
                <ThumbDown className="Votes-down" />
            </IconButton>
        </Typography>
    );
};

export default Votes;