import React from 'react';
import ArticleList from './components/ArticleList'
import ArticleForm from './components/ArticleForm'
import ArticlePosts from './components/ArticlePosts'
import Cookies from 'js-cookie'
// import Modal from 'react-bootstrap/Model';
// import Button from 'react-bootstrap/Button';
import './App.css';

// function Example() {
//   const [show, setShow] = useState(false);
//
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//
//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>
//
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }


class Article extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    articles: [],
    page: 'home',
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleClick = this.handleClick.bind(this);
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
      display = <ArticlePosts articles={this.state.articles}/>;
    }

    console.log(this.state.articles);
    return (
      <React.Fragment>
      <nav className="navbar navbar-dark">
        <p className="webName">NEWS SITE</p>
        <div className='pages'>
          <button className="btn  menu-button"type="button" onClick={() => this.handleClick('home')}>Home</button>
          <button className="btn  menu-button"type="button" onClick={() => this.handleClick('form')}>Form</button>
          <button className="btn  menu-button"type="button" onClick={() => this.handleClick('posts')}>Posts</button>
        </div>
      </nav>
      <div className='container fullpage'>
        {display}
      </div>
      </React.Fragment>
    );
  }
}

export default Article;
