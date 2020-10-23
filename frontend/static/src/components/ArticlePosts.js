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
    user: '',
    top_story: false,
    articles: [],
  }
  this.handleClick = this.handleClick.bind(this);
  this.handleModal = this.handleModal.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

componentDidMount() {
  const is_staff = localStorage.getItem('is_staff')
  console.log('is_staff', is_staff);
  if(is_staff === 'false'){
    fetch('/api/v1/articles/user-view')
      .then(responce => responce.json())
      .then(data => this.setState({articles: data}))
      .catch(error => console.log('Error: ', error));
    }
    else{
      fetch('/api/v1/articles/super-user-view')
        .then(responce => responce.json())
        .then(data => this.setState({articles: data}))
        .catch(error => console.log('Error: ', error));
    }
  }

handleClick(display) {
    this.setState({displayStatus: display});
}

handleModal(display) {
    const articleId = this.state.articles.findIndex(x => x.id === display)
    this.setState({articleDisplay: this.state.articles[articleId]})
    this.setState({show: !this.state.show});
}

handleChange(event) {

  const articleDisplay = {...this.state.articleDisplay};
  articleDisplay[event.target.name] = event.target.value;
  this.setState({articleDisplay});
}

render(){

  const is_staff = localStorage.getItem('is_staff')

  let status = this.state.displayStatus;
  let display;

  if(status === 'All Posts'){
     display = this.state.articles
     .map(article => <MyArticle key={article.id} article={article} handleModal= {this.handleModal}/>)
  }else if(status === 'Drafts'){
    display = this.state.articles
   .filter(article => article.status === 'draft')
   .map(article => <MyArticle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }else if(status === 'Submited'){
    display = this.state.articles
   .filter(article => article.status === 'submit')
   .map(article => <MyArticle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }else if(status === 'Published'){
    display = this.state.articles
   .filter(article => article.status === 'publish')
   .map(article => <MyArticle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }else if(status === 'Declined'){
    display = this.state.articles
   .filter(article => article.status === 'declined')
   .map(article => <MyArticle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }

  return (
    <React.Fragment>
    <div className='row posts-page'>
      <div className='col-8'>
      <section id="pages" className="row">
        <button className=" btn" onClick={() => this.handleClick('All Posts')}>All Posts</button>
        <button className=" btn" onClick={() => this.handleClick('Drafts')}>Drafts</button>
        <button className=" btn" onClick={() => this.handleClick('Submited')}>Submited</button>
        <button className=" btn" onClick={() => this.handleClick('Published')}>Published</button>
        <button className=" btn" onClick={() => this.handleClick('Declined')}>Declined</button>
    </section>
      <h1 className='posts-title'>{this.state.displayStatus}</h1>
      {display}
      </div>
    </div>
    <Modal animation={false} show={this.state.show} >
      <Modal.Header>{this.state.articleDisplay.title}</Modal.Header>
      <Modal.Body>
        <form className="col-12" onSubmit={(event)=> this.props.editArticle(event, this.state.articleDisplay, this.state.articleDisplay.id)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={this.state.articleDisplay.title} onChange={this.handleChange}/>
          <label htmlFor="body">Body</label>
          <textarea rows='5' type="text" className="form-control" id="body" name="body" value={this.state.articleDisplay.body} onChange={this.handleChange}/>
          <label htmlFor="category">Category</label>
          <select id="category" className="form-control" name="category" value={this.state.articleDisplay.category} onChange={this.handleChange}>
            <option>travel</option>
            <option>sports</option>
            <option>entertainment</option>
            <option>food</option>
          </select>
          <label htmlFor="status">Post Status</label>
          {
            is_staff === true
            ?<select id="status" className="form-control" name="status" value={this.state.articleDisplay.status} onChange={this.handleChange}><option>draft</option><option>submit</option><option>publish</option><option>decline</option></select>
            :<select id="status" className="form-control" name="status" value={this.state.articleDisplay.status} onChange={this.handleChange}><option>draft</option><option>submit</option></select>
          }
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
