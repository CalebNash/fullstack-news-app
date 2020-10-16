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


function ArticleList(props){
  const topArticles = props.articles
  .filter(article => article.top_story)
  .map(article => <ArticleItem key={article.id} article={article}/>)
  const lastWeekArt = props.articles
    .filter(article => !article.top_story)
    .map(article => <ArticleTitle key={article.id} article={article}/>)
  return (
    <React.Fragment>
    <div className='row page-content'>
      <div className='col-6'><h1>TOP STORIES</h1>{topArticles}</div>
      <div className='col-3'>{lastWeekArt}</div>
    </div>
    </React.Fragment>
  )
}

export default ArticleList ;
