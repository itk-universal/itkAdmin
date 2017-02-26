import React, { Component } from 'react'
import '../Stylesheets/SideBar.css'
import classname from 'classnames'
import {Link} from 'react-router'

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: false,
            jobs: false,
            remote: false,
            post: false
        }
    }

    componentDidMount() {
        this.handleClick(this.props.path);
    }

    handleClick = (name) => {
        switch (name) {
            case "/topics":
                this.setState({ topics: true, jobs: false, remote: false, posts:false });
                break;
            case "/jobs":
                this.setState({ topics: false, jobs: true, remote: false, posts:false });
                break;
            case "/remote":
                this.setState({ topics: false, jobs: false, remote: true, posts:false });
                break;
            case "/posts":
                this.setState({ topics: false, jobs: false, remote: false, posts:true });
                break;
            default:
                this.setState({ topics: false, jobs: false, remote: false, posts:false });
        }
    }

    render() {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <Link to='/'>
                            ITK
                        </Link>
                    </li>
                    <li>
                        <Link to="/topics"
                              activeClassName={ this.state.topics ? 'active' : '' }
                              onClick={() => this.handleClick('/topics')}>
                            社区
                        </Link>
                    </li>
                    <li>
                        <Link to="/jobs"
                              activeClassName={ this.state.jobs ? 'active' : '' }
                              onClick={() => this.handleClick('/jobs')}>
                            招聘
                        </Link>
                    </li>
                    <li>
                        <Link to="/remote"
                              activeClassName={ this.state.remote ? 'active' : '' }
                              onClick={() => this.handleClick('/remote')}>
                            远程工作
                        </Link>
                    </li>
                    <li>
                        <Link to="/posts"
                              activeClassName={ this.state.posts ? 'active' : '' }
                              onClick={() => this.handleClick('/posts')}>Posts</Link>
                    </li>
                </ul>
            </div>
        )
    }
}