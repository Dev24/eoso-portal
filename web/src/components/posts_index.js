import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
//import {bindActionCreators} from 'redux';

class PostIndex extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render(){
        console.log(this.props.posts);
        
        return (
            <div>
                <h3>Post List</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
// }

function mapStateToProps(state){
    return {posts: state.posts};
}


export default connect (mapStateToProps, {fetchPosts})(PostIndex);