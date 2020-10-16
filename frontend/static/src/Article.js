import React from 'react';
import ArticleList from './components/ArticleList'
import ArticleForm from './components/ArticleForm'
import Cookies from 'js-cookie'
import './App.css';

class Article extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    articles: [],
    makeArticle: false,
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.changePage = this.changePage.bind(this);
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

changePage(){

}

  render(){
    console.log(this.state.articles);
    return (
      <React.Fragment>
      <nav className="navbar navbar-dark">
        <p className="webName">NEWS SITE</p>
        <div className='pages'>
          <button className="btn  menu-button"type="button" onClick={() => this.setState({makeArticle: false})}>Home</button>
          <button className="btn  menu-button"type="button" onClick={() => this.setState({makeArticle: true})}>Form</button>
        </div>
      </nav>
      <div className='container'>
          {
            this.state.makeArticle
            ?<ArticleForm handleSubmit= {this.handleSubmit}/>
            :<ArticleList articles={this.state.articles}/>

          }

      </div>
      </React.Fragment>
    );
  }
}

export default Article;
