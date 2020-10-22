import React from 'react';
import Cookies from 'js-cookie';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      preview: '',
    }
    this.addImage = this.addImage.bind(this)
    this.handleImage = this.handleImage.bind(this)
  }

  async addImage(e, obj){
       e.preventDefault();
       const options = {
         method: 'POST',
         headers: {
           'Content-Type': 'multipart/form-data;boundary="boundary"',
           'X-CSRFToken': Cookies.get('csrftoken'),
         },
         body: JSON.stringify(obj)
       };

       const handleError = (err) => console.warn(err);
       const responce = await fetch('/api/v1/profile/', options);
       const data = await responce.json().catch(handleError);

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
  render(){
    return(
      <form className="col-12" onSubmit={(event) => this.addPicture(event, this.state)}>
        <div className="form-group">
          <label htmlFor="avatar">Add picture</label>
          <input type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
          <img src={this.state.preview} alt=''/>
        </div>
        <button type="submit" className="btn btn-primary">Add Profile</button>
      </form>
    )
  }
}
export default Profile;
