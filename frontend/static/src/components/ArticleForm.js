import React from 'react'


class ArticleForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      category: 'travel',
      status: 'draft',
      user: '',
      top_story: false,
      image: null,
      preview: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleImage(e){
      let file = e.target.files[0];
      this.setState({
        image: file
      });

      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({
          preview: reader.result
        });
      }
      reader.readAsDataURL(file);
    }


  render(){

    return(
      <form className="col-12" onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
        <div className="form-group">
          <label htmlFor="image">Add picture</label>
          <input type='file' id="image" name="image" onChange={this.handleImage}/>
          <img className='image-preview' src={this.state.preview} alt=''/>
        </div>
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

        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}

export default ArticleForm;
