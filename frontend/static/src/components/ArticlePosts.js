import React from 'react'
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function MyArticle(props){

  return(
    <div className='list-group'>
      <div className='list-group-item preview'>
        <h4>{props.article.title}</h4>
        <div className='preview-para'>
          <p className='todo-title'>{props.article.body}</p>
        </div>
        <button className="btn view-art"type="button" onClick={() => props.handleModal(props.article.id)}>Edit Article</button>
      </div>
    </div>
  )
}






class ArticlePosts extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    displayStatus: 'All Posts',
    show: false,
    articleDisplay: {},
    title: '',
    body: '',
    category: 'travel',
    status: 'draft',
    author: '',
    top_story: false,
  }
  this.handleClick = this.handleClick.bind(this);
  this.handleModal = this.handleModal.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

handleClick(display) {
    this.setState({displayStatus: display});
}

handleModal(display) {
    const articleId = this.props.articles.findIndex(x => x.id === display)
    this.setState({articleDisplay: this.props.articles[articleId]})
    this.setState({show: !this.state.show});
}

handleChange(event) {
  this.setState({[event.target.name]: event.target.value});
}

render(){

  let status = this.state.displayStatus;
  let display;

  if(status === 'All Posts'){
     display = this.props.articles
     .map(article => <MyArticle key={article.id} article={article} handleModal= {this.handleModal}/>)
  }else if(status === 'Drafts'){
    display = this.props.articles
   .filter(article => article.status === 'draft')
   .map(article => <MyArticle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }else if(status === 'Submited'){
    display = this.props.articles
   .filter(article => article.status === 'submit')
   .map(article => <MyArticle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }else if(status === 'Published'){
    display = this.props.articles
   .filter(article => article.status === 'publish')
   .map(article => <MyArticle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }
//this.props.editArticle(event, this.props.articleDisplay, this.props.articleDisplay.id)
//function (event){
  //event.preventDefault()
  //let newArticle = {title: this.state.title, body: this.state.body, category: this.state.category, status: this.state.status, author: this.state.author};
  //this.props.editArticle( this.state.articleDisplay.id);
//}}>
  return (
    <React.Fragment>
    <div className='row posts-page'>
      <div className='col-8'>
      <section id="pages" className="row">
        <button className=" btn" onClick={() => this.handleClick('All Posts')}>All Posts</button>
        <button className=" btn" onClick={() => this.handleClick('Drafts')}>Drafts</button>
        <button className=" btn" onClick={() => this.handleClick('Submited')}>Submited</button>
        <button className=" btn" onClick={() => this.handleClick('Published')}>Published</button>
    </section>
      <h1 className='posts-title'>{this.state.displayStatus}</h1>
      {display}
      </div>
    </div>
    <Modal show={this.state.show} >
      <Modal.Header>{this.state.articleDisplay.title}</Modal.Header>
      <Modal.Body>
        <form className="col-12" onSubmit={(event)=> this.props.editArticle(event, this.state, this.state.articleDisplay.id)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
          <label htmlFor="body">Body</label>
          <textarea rows='5' type="text" className="form-control" id="body" name="body" value={this.state.body} onChange={this.handleChange}/>
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
      </form></Modal.Body>
      <Modal.Footer>
      <Button onClick={() => this.props.deleteArticle(this.state.articleDisplay.id)}>Delete</Button>
        <Button onClick={(event) => this.setState({show: false})}>Close</Button>
      </Modal.Footer>
    </Modal>
    </React.Fragment>
  )
}
}

export default ArticlePosts ;
