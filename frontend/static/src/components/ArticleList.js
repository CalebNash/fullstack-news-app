import React from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function ArticleItem(props){
  return(
    <div className='list-group'>
      <div className='list-group-item preview'>
        <section className='preview-body'>
          <h4 className='preview-title'>{props.article.title}</h4>
          <h5 className='preview-category'>{props.article.category}</h5>
          <div className='preview-para'>
            <p className='todo-title'>{props.article.body}</p>
          </div>
          <button className="btn view-art"type="button" onClick={() => props.handleModal(props.article.id)}>View Article</button>
        </section>
        <p className='preview-author'>By {props.article.user}</p>
      </div>
    </div>
  )
}

function ArticleTitle(props){

  return(
    <div className='list-group'>
      <div className='list-group-item side-preview'>
        <p className='side-art-title'>{props.article.title}</p>
        <section id='side-art-foot'>
          <p className='side-art-author'>by {props.article.user}</p>
          <button className="btn view-side-art"type="button" onClick={() => props.handleModal(props.article.id)}>View Article</button>
        </section>
      </div>
    </div>
  )
}


class ArticleList extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    category: 'Top Stories',
    show: false,
    title: '',
    body: '',
    articleDisplay: {},
  }
  this.handleClick = this.handleClick.bind(this);
  this.handleModal = this.handleModal.bind(this);
}

handleClick(display) {
    this.setState({category: display});
}

handleModal(display) {
    const articleId = this.props.articles.findIndex(x => x.id === display)
    this.setState({articleDisplay: this.props.articles[articleId]})
    this.setState({show: !this.state.show});

}

render(){

  let category = this.state.category;
  let bigArticles;
  let littleArticles;

  if(category === 'Top Stories'){
     bigArticles = this.props.articles
    .filter(article => article.top_story)
    .map(article => <ArticleItem key={article.id} article={article} handleModal= {this.handleModal}/>)
     littleArticles = this.props.articles
    .filter(article => !article.top_story)
    .map(article => <ArticleTitle key={article.id} article={article} handleModal= {this.handleModal}/>)
  }else if(category === 'Sports'){
    bigArticles = this.props.articles
   .filter(article => article.category === 'sports')
   .map(article => <ArticleItem key={article.id} article={article} handleModal= {this.handleModal}/>)
    littleArticles = this.props.articles
   .filter(article => article.category !=='sports')
   .map(article => <ArticleTitle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }else if(category === 'Food'){
    bigArticles = this.props.articles
   .filter(article => article.category === 'food')
   .map(article => <ArticleItem key={article.id} article={article} handleModal= {this.handleModal}/>)
    littleArticles = this.props.articles
   .filter(article => article.category !=='food')
   .map(article => <ArticleTitle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }else if(category === 'Travel'){
    bigArticles = this.props.articles
   .filter(article => article.category === 'travel')
   .map(article => <ArticleItem key={article.id} article={article} handleModal= {this.handleModal}/>)
    littleArticles = this.props.articles
   .filter(article => article.category !=='travel')
   .map(article => <ArticleTitle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }else if(category === 'Entertainment'){
    bigArticles = this.props.articles
   .filter(article => article.category === 'entertainment')
   .map(article => <ArticleItem key={article.id} article={article} handleModal= {this.handleModal}/>)
    littleArticles = this.props.articles
   .filter(article => article.category !=='entertainment')
   .map(article => <ArticleTitle key={article.id} article={article} handleModal= {this.handleModal}/>)
 }


  return (
    <React.Fragment>
    <div className='row page-content'>
      <div className='col-lg-8 '>
      <section id="pages" className="row">
        <button className=" btn" onClick={() => this.handleClick('Top Stories')}>Top Stories</button>
        <button className=" btn" onClick={() => this.handleClick('Sports')}>Sports</button>
        <button className=" btn" onClick={() => this.handleClick('Food')}>Food</button>
        <button className=" btn" onClick={() => this.handleClick('Travel')}>Travel</button>
        <button className=" btn" onClick={() => this.handleClick('Entertainment')}>Entertainment</button>

    </section>
      <h1 className='main-title'>{this.state.category}</h1>
      {bigArticles}
      </div>
      <div className='col-lg-4 side'><h2 className='side-title'>This week</h2>{littleArticles}</div>
    </div>
    <Modal animation={false} dialogClassName="display-article-modal" show={this.state.show} >
      <Modal.Header >{this.state.articleDisplay.title}</Modal.Header>
      <Modal.Body>{this.state.articleDisplay.body}</Modal.Body>
      <Modal.Footer>
        <Button onClick={(event) => this.setState({show: false})}>Close</Button>
      </Modal.Footer>
    </Modal>
    </React.Fragment>
  )
}
}

export default ArticleList ;
