import React from 'react'

class ArticleForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      category: '',
      status: '',
      author: '',
      top_story: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){

    return(
      <form className="col-12 col-md-6 mb-5" onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
          <label htmlFor="body">Body</label>
          <textarea type="text" className="form-control" id="body" name="body" value={this.state.body} onChange={this.handleChange}/>
          <label htmlFor="category">Category</label>
          <select id="category" className="form-control" name="category" value={this.state.category} onChange={this.handleChange}>
            <option>travel</option>
            <option>sports</option>
            <option>entertainment</option>
            <option>food</option>
          </select>
          <label htmlFor="status">Post Status</label>
          <select id="status" className="form-control" name="status" value={this.state.status} onChange={this.handleChange}>
            <option>draft</option>
            <option>submit</option>
            <option>publish</option>
          </select>
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" id="author" name="author" value={this.state.author} onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}

export default ArticleForm;
