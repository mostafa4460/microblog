import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
import PostDetails from './PostDetails';

const postsList = [
    {id: 1, title: "How to Become a Pokemon Master.", description: "A step by step tutorial on how to become a pokemon master!", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla at volutpat diam ut. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Id ornare arcu odio ut sem nulla pharetra diam. Et leo duis ut diam quam. Eu lobortis elementum nibh tellus molestie nunc. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Posuere morbi leo urna molestie at elementum eu facilisis. Ac turpis egestas integer eget. At volutpat diam ut venenatis. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eu sem integer vitae justo eget magna fermentum iaculis eu. Venenatis lectus magna fringilla urna porttitor. Sed sed risus pretium quam vulputate dignissim. Nisl purus in mollis nunc sed id semper risus in. Curabitur gravida arcu ac tortor dignissim. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.", comments: [
        {id: 1, msg: "I'm already a pokemon master you idiot!"},
        {id: 2, msg: "This was very helpful, thank you :)"},
        {id: 3, msg: "Gotta catch em all!!"}
    ]},
    {id: 2, title: "Is The Office the Best Show to Ever Be Made?", description: "10 Reasons why The Office is the best tv show.", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla at volutpat diam ut. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Id ornare arcu odio ut sem nulla pharetra diam. Et leo duis ut diam quam. Eu lobortis elementum nibh tellus molestie nunc. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Posuere morbi leo urna molestie at elementum eu facilisis. Ac turpis egestas integer eget. At volutpat diam ut venenatis. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eu sem integer vitae justo eget magna fermentum iaculis eu. Venenatis lectus magna fringilla urna porttitor. Sed sed risus pretium quam vulputate dignissim. Nisl purus in mollis nunc sed id semper risus in. Curabitur gravida arcu ac tortor dignissim. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.", comments: []},
    {id: 3, title: "IDK, I ran out of juice...", description: "Hmmmmmmmmmmm ... IDK!", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla at volutpat diam ut. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Id ornare arcu odio ut sem nulla pharetra diam. Et leo duis ut diam quam. Eu lobortis elementum nibh tellus molestie nunc. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Posuere morbi leo urna molestie at elementum eu facilisis. Ac turpis egestas integer eget. At volutpat diam ut venenatis. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Eu sem integer vitae justo eget magna fermentum iaculis eu. Venenatis lectus magna fringilla urna porttitor. Sed sed risus pretium quam vulputate dignissim. Nisl purus in mollis nunc sed id semper risus in. Curabitur gravida arcu ac tortor dignissim. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit.", comments: []}
];

const INITIAL_FORM = {title: "", description: "", body: ""};

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Home posts={postsList} />
        </Route>
        <Route exact path="/new">
            <PostForm initialForm={INITIAL_FORM} title="New Post" />
        </Route>
        <Route exact path="/:id">
            <PostDetails posts={postsList} />
        </Route>
    </Switch>
);

export default Routes;