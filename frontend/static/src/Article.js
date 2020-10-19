import React from 'react';
import ArticleList from './components/ArticleList'
import ArticleForm from './components/ArticleForm'
import ArticlePosts from './components/ArticlePosts'
import Cookies from 'js-cookie'
import './App.css';


class Article extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    articles: [],
    page: 'home',
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.deleteArticle = this.deleteArticle.bind(this);
  this.editArticle = this.editArticle.bind(this);
}

componentDidMount() {
  fetch('/api/v1/')
    .then(responce => responce.json())
    .then(data => this.setState({articles: data}))
    .catch(error => console.log('Error: ', error));
  }

  handleSubmit(event, data){
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken')
    console.log('data', data);
    fetch('/api/v1/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
    }
      return response.json()
    })
    .then(data => {
      console.log('firing', data);
      const articles = [...this.state.articles, data];
      this.setState({articles: articles});
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  deleteArticle(id) {
      fetch(`/api/v1/${id}/`, {
        method: 'DELETE',
      })
      .then(responce => responce)
      .then(data => {
        const articles = [...this.state.articles];
        const index = articles.findIndex(article => article.id === id)
        articles.splice(index,1);
        this.setState({articles})
      })
      .catch(error => console.log('Error:', error))
    }


    editArticle(event, data, id){
        event.preventDefault();
        fetch(`api/v1/${id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responce => console.log(responce))
        .catch(error => console.log('Error:', error));
    }


  handleClick(display) {
      this.setState({page: display});
  }



  render(){

    let page = this.state.page;
    let display;

    if(page === 'home'){
      display = <ArticleList articles={this.state.articles}/>;
    }else if(page === 'form'){
      display = <ArticleForm handleSubmit= {this.handleSubmit}/>;
    }else if(page === 'posts'){
      display = <ArticlePosts articles={this.state.articles} deleteArticle={this.deleteArticle} editArticle={this.editArticle}/>;
    }

    return (
      <React.Fragment>
      <nav className="navbar navbar-dark">
        <div className='pages'>
          <button className="btn  menu-button"type="button" onClick={() => this.handleClick('home')}>Home</button>
          <button className="btn  menu-button"type="button" onClick={() => this.handleClick('form')}>Form</button>
          <button className="btn  menu-button"type="button" onClick={() => this.handleClick('posts')}>Posts</button>
        </div>
      </nav>
      <div className='page-title'><h1>Fake News</h1></div>
      <div className='container fullpage'>
        {display}
      </div>
      </React.Fragment>
    );
  }
}

export default Article;
