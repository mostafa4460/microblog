import {useHistory} from 'react-router-dom';
import {
    Card, 
    CardContent, 
    CardActionArea, 
    Typography, 
    Divider
} from '@material-ui/core';
import Votes from './Votes';
import './Post.css';

const Post = ({id, title, description, votes}) => {
    const history = useHistory();

    return (
        <Card elevation={0} className="Post">
            <CardActionArea onClick={() => history.push(`/${id}`)}>
                <CardContent>
                    <Typography variant="h6" component="h6" color="primary">
                        {title}
                    </Typography> 
                    <Typography component="em">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider />
            <CardContent className="Post-votes-area">
                <Votes postId={id} votes={votes} />
            </CardContent>
        </Card>
    );
};

export default Post;