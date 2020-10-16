import React from 'react';


function ArticleItem(props){

  return(
    <div className='list-group'>
      <div className='list-group-item preview'>
        <h4>{props.article.title}</h4>
        <div className='preview-para'>
          <p className='todo-title'>{props.article.body}</p>
        </div>
        <button className="btn view-art"type="button">View Article</button>
      </div>
    </div>
  )
}

function ArticleTitle(props){

  return(
    <div className='list-group'>
      <div className='list-group-item'>
        <p>{props.article.title}</p>
      </div>
    </div>
  )
}


class ArticleList extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    category: 'Top Stories',
  }
  this.handleClick = this.handleClick.bind(this);
}

handleClick(display) {
    this.setState({category: display});
}

render(){

  let category = this.state.category;
  let bigArticles;
  let littleArticles;

  if(category === 'Top Stories'){
     bigArticles = this.props.articles
    .filter(article => article.top_story)
    .map(article => <ArticleItem key={article.id} article={article}/>)
     littleArticles = this.props.articles
    .filter(article => !article.top_story)
    .map(article => <ArticleTitle key={article.id} article={article}/>)
  }else if(category === 'Sports'){
    bigArticles = this.props.articles
   .filter(article => article.category === 'sports')
   .map(article => <ArticleItem key={article.id} article={article}/>)
    littleArticles = this.props.articles
   .filter(article => article.category !=='sports')
   .map(article => <ArticleTitle key={article.id} article={article}/>)
 }else if(category === 'Food'){
    bigArticles = this.props.articles
   .filter(article => article.category === 'food')
   .map(article => <ArticleItem key={article.id} article={article}/>)
    littleArticles = this.props.articles
   .filter(article => article.category !=='food')
   .map(article => <ArticleTitle key={article.id} article={article}/>)
 }else if(category === 'Travel'){
    bigArticles = this.props.articles
   .filter(article => article.category === 'travel')
   .map(article => <ArticleItem key={article.id} article={article}/>)
    littleArticles = this.props.articles
   .filter(article => article.category !=='travel')
   .map(article => <ArticleTitle key={article.id} article={article}/>)
 }else if(category === 'Entertainment'){
    bigArticles = this.props.articles
   .filter(article => article.category === 'entertainment')
   .map(article => <ArticleItem key={article.id} article={article}/>)
    littleArticles = this.props.articles
   .filter(article => article.category !=='entertainment')
   .map(article => <ArticleTitle key={article.id} article={article}/>)
 }


  return (
    <React.Fragment>
    <div className='row page-content'>
      <div className='col-6'>
      <section id="pages" class="row">
        <button className=" btn" onClick={() => this.handleClick('Top Stories')}>Top Stories</button>
        <button className=" btn" onClick={() => this.handleClick('Sports')}>Sports</button>
        <button className=" btn" onClick={() => this.handleClick('Food')}>Food</button>
        <button className=" btn" onClick={() => this.handleClick('Travel')}>Travel</button>
        <button className=" btn" onClick={() => this.handleClick('Entertainment')}>Entertainment</button>

    </section>
      <h1>{this.state.category}</h1>
      {bigArticles}
      </div>
      <div className='col-3'><h2>This week</h2>{littleArticles}</div>
    </div>
    </React.Fragment>
  )
}
}

export default ArticleList ;
