import React from 'react';
import Cookies from 'js-cookie';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      preview: '',
      profile: {}
    }
    this.addImage = this.addImage.bind(this)
    this.handleImage = this.handleImage.bind(this)
    this.logImg = this.logImg.bind(this)
  }

  // componentDidMount() {
  //   fetch('/api/v1/profile/')
  //     .then(responce => responce.json())
  //     .then(data => this.setState({profile: data}))
  //     .catch(error => console.log('Error: ', error));
  //   }

  async addImage(e){
       e.preventDefault();
       let formData = new FormData();
       formData.append('avatar', this.state.image)
       console.log(formData);
       const options = {
         method: 'POST',
         headers: {
           'X-CSRFToken': Cookies.get('csrftoken'),
         },
         body: formData
       };

       const handleError = (err) => console.warn(err);
       const responce = await fetch('/api/v1/profile/', options);
       const data = await responce.json().catch(handleError);
       console.log(data);
       if(data.key){
         Cookies.set('Authorization', `Token ${data.key}`)
       }

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

  logImg(){
    console.log(this.state.profile);
  }
  render(){
    //<img src="http://127.0.0.1:8000/media/profiles/FB_IMG_1599050444777.jpg" alt=""/>
    return(
      <React.Fragment>
      <button onClick={this.logImg}>print</button>
      <form className="col-12" onSubmit={this.addImage}>
        <div className="form-group">
          <label htmlFor="avatar">Add picture</label>
          <input type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
          <img src={this.state.preview} alt=''/>
        </div>
        <button type="submit" className="btn btn-primary">Add Profile</button>
      </form>
      </React.Fragment>
    )
  }
}
export default Profile;
