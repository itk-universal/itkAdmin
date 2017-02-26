import React, { Component } from 'react';
//import '../Stylesheets/Posts.css'

class Posts extends Component {
	//const {fields: {name}, handleSubmit} = this.props;
	handleSubmit(data) {
		this.props.actions.myPost(data);
	}
	render() {
		return (
			<form className="form-horizontal" onSubmit={this.handleSubmit(this)}>
				<div className="form-group">
					<label className="col-md-2 control-label">商品名:</label>
					<div className="col-md-6">
						<input className="form-control"  type="text" name="name" {...name}/>
					</div>
				</div>
				<div className="form-group">
					<label className="col-md-2 control-label">数量:</label>
					<div className="col-md-6">
						<input className="form-control"  type="text"  name="money" {...name}/>
					</div>
				</div>
				<div className="form-group">
					<label className="col-md-2 control-label">描述:</label>
					<div className="col-md-6">
						<input className="form-control"  type="text" name="desc" {...name}/>
					</div>
				</div>
				<button type="submit" className="btn btn-primary">提交</button>
			</form>
		);
	}
}

export default Posts