import React, { Component, PropTypes, cloneElement } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './Action'
import Navbar from './Component/Navbar';
//import Footer from './Component/Footer';
import SideBar from './Component/SideBar';

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };
  render() {
    let layout = '';
    const childrenWithProps = React.Children.map(this.props.children,
        (child) => cloneElement(child, {
          actions: this.props.actions,
          results: this.props.results
        })
    );

    let pathname = this.props.location.pathname;

    if (pathname === '/login') {
      layout = <div className='container'>
                {childrenWithProps}
               </div>
      return (
        <div>
          {layout}
        </div>
      )
    }
      layout = <div >
          {childrenWithProps}
      </div>;

    return (
      <div id="wrapper">
          <div id="sidebar-wrapper">
              <SideBar path={this.props.location.pathname}/>
          </div>
          <div id="page-content-wrapper">
              <Navbar/>
              { layout }
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = state => {
  const { postsByReddit } = state;
  let replies = [], topics = [], topic = {}, results = postsByReddit['results']
  if (results) {
    switch (results.type) {
      case actions.TOPIC:
        topic = results.topic
        replies = results.replies
        break
      case actions.TOPICS:
        topics = results.topics
        break
      default:
        {}
    }
  }
  return {
    results: {
      replies,
      topics,
      topic
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
