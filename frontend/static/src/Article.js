import React from 'react';
import ArticleList from './components/ArticleList'
import ArticleForm from './components/ArticleForm'
import ArticlePosts from './components/ArticlePosts'
import Register from './components/Register'
import Login from './components/Login.js';
import Profile from './components/Profile.js';
import Cookies from 'js-cookie'
import './App.css';


class Article extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    articles: [],
    page: 'home',
    loggedIn: Cookies.get('Authorization')? true: false,
    isStaff: localStorage.getItem('is_staff')? true: false,

  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.deleteArticle = this.deleteArticle.bind(this);
  this.editArticle = this.editArticle.bind(this);
  this.handleRegistration = this.handleRegistration.bind(this);
  this.handleLogin = this.handleLogin.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
}

componentDidMount() {
  fetch('/api/v1/articles/')
    .then(responce => responce.json())
    .then(data => this.setState({articles: data}))
    .catch(error => console.log('Error: ', error));
  }

  handleSubmit(event, data){
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken')
    console.log('data', data);
    fetch('/api/v1/articles/', {
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
      const csrftoken = Cookies.get('csrftoken')
      fetch(`/api/v1/articles/${id}/`, {
        method: 'DELETE',
        headers: {
          'X-CSRFToken': csrftoken,
        },
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
        const csrftoken = Cookies.get('csrftoken')
        fetch(`api/v1/articles/${id}/`, {
          method: 'PUT',
          headers: {
            'X-CSRFToken': csrftoken,
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

  async handleRegistration(e, obj){
  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(obj)
  };

  const handleError = (err) => console.warn(err);
  const responce = await fetch('/api/v1/rest-auth/registration/', options);
  const data = await responce.json().catch(handleError);

  if(data.key){
    Cookies.set('Authorization', `Token ${data.key}`)
    this.setState({page: 'posts'});
    this.setState({loggedIN: true});
  }

}

async handleLogin(e, obj, reg){
    e.preventDefault();
    if(reg){
      this.setState({page: 'register'});
    }else{
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj)
      };

      const handleError = (err) => console.warn(err);
      const responce = await fetch('/api/v1/rest-auth/login/', options);
      const data = await responce.json().catch(handleError);

      if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`)
        this.setState({loggedIn: true});
        this.setState({page: 'posts'})
        localStorage.setItem('is_staff', data.is_staff);
      }
    }
  }

  async handleLogout(e){
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    };

    const handleError = (err) => console.warn(err);
    const responce = await fetch('/api/v1/rest-auth/logout/', options);
    const data = await responce.json().catch(handleError);

    if(data.detail === "Successfully logged out."){
      Cookies.remove('Authorization');
      this.setState({page: 'home'});
      this.setState({loggedIn: false});
      localStorage.clear();
    }

  }



  render(){

    let page = this.state.page;
    let display;
    if(page === 'home'){
      display = <ArticleList articles={this.state.articles}/>;
    }else if(page === 'form'){
      display = <ArticleForm handleSubmit= {this.handleSubmit}/>;
    }else if(page === 'posts'){
      display =  <React.Fragment><ArticlePosts deleteArticle={this.deleteArticle} editArticle={this.editArticle} handleLogout = {this.handleLogout} isStaff ={this.state.isStaff}/><ArticleForm handleSubmit= {this.handleSubmit}/><Profile/></React.Fragment>;
    }else if(page === 'register'){
      display = <Register handleRegistration = {this.handleRegistration}/>;
    }else if(page === 'login'){
      display = <Login handleLogin = {this.handleLogin}/>;
    }

    return (
      <React.Fragment>
      <nav className="navbar navbar-dark">
        <div className='pages'>
          <div className='nav-buttons'>
            <button className="btn  menu-button"type="button" onClick={() => this.handleClick('home')}>Home</button>
          </div>
          {
            this.state.loggedIn
            ?<div className='log-status'><button className="btn  menu-button"type="button" onClick={() => this.handleClick('posts')}>Posts</button><button className="btn  menu-button"type="button" onClick={this.handleLogout}>Logout</button></div>
            :<div className='log-status'><button className="btn  menu-button"type="button" onClick={() => this.handleClick('login')}>Login</button></div>
          }
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
