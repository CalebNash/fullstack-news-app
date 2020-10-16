import React from 'react'

function MyArticle(props){

  return(
    <div className='list-group'>
      <div className='list-group-item preview'>
        <h4>{props.article.title}</h4>
        <div className='preview-para'>
          <p className='todo-title'>{props.article.body}</p>
        </div>
        <button className="btn view-art"type="button">Edit Article</button>
      </div>
    </div>
  )
}






class ArticleList extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    status: 'All Posts',
  }
  this.handleClick = this.handleClick.bind(this);
}

handleClick(display) {
    this.setState({status: display});
}

render(){

  let status = this.state.status;
  let display;

  if(status === 'All Posts'){
     display = this.props.articles
     .map(article => <MyArticle key={article.id} article={article}/>)
  }else if(status === 'Drafts'){
    display = this.props.articles
   .filter(article => article.status === 'draft')
   .map(article => <MyArticle key={article.id} article={article}/>)
 }else if(status === 'Submited'){
    display = this.props.articles
   .filter(article => article.status === 'submit')
   .map(article => <MyArticle key={article.id} article={article}/>)
 }else if(status === 'Published'){
    display = this.props.articles
   .filter(article => article.status === 'published')
   .map(article => <MyArticle key={article.id} article={article}/>)
 }

  return (
    <React.Fragment>
    <div className='row page-content'>
      <div className='col-6'>
      <section id="pages" class="row">
        <button className=" btn" onClick={() => this.handleClick('All Posts')}>All Posts</button>
        <button className=" btn" onClick={() => this.handleClick('Drafts')}>Drafts</button>
        <button className=" btn" onClick={() => this.handleClick('Submited')}>Submited</button>
        <button className=" btn" onClick={() => this.handleClick('Published')}>Published</button>
    </section>
      <h1>{this.state.status}</h1>
      {display}
      </div>
    </div>
    </React.Fragment>
  )
}
}

export default ArticleList ;
