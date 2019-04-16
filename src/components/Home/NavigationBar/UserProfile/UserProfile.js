import React from 'react';
import './UserProfile.css';
import avatar from '../img_avatar.png';
import FileReader from 'filereader';

const showPasswdArea = () => {
  let passwdArea = document.getElementsByClassName('passwd-area')[0];
  passwdArea.style.display = 'block';
  let changePasswdButton = document.getElementById('change-passwd');
  changePasswdButton.style.display = 'none';
}

const closePasswdArea = () => {
  let passwdArea = document.getElementsByClassName('passwd-area')[0];
  passwdArea.style.display = 'none';
  let changePasswdButton = document.getElementById('change-passwd');
  changePasswdButton.style.display = 'block';
}

const launchEditDialog = () => {
  let modal = document.getElementById('myModal');
  modal.style.display = "block";
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
      closePasswdArea();
    }
  }
}

const closeEditDialog = () => {
  let modal = document.getElementById('myModal');
  modal.style.display = "none";
  closePasswdArea();
}

const toggleShowButton = (type) => {
  let passwdinput, showButton;
  if(type === 'current') {
    passwdinput = document.getElementsByClassName('current-passwd')[0];
    showButton = document.getElementById('show-button');
  } else {
    passwdinput = document.getElementsByClassName('new-passwd')[0];
    showButton = document.getElementById('show-button-new');
  }
  passwdinput.focus();
  if (showButton.className === 'fas fa-eye icon' && passwdinput.type === 'password') {
    showButton.className = 'fas fa-eye-slash icon';
    passwdinput.type = 'text';
  } else {
    showButton.className = 'fas fa-eye icon';
    passwdinput.type = 'password';
  }
}

const focusPasswdInput = () => {
  let passwdinput = document.getElementsByClassName('current-passwd')[0];
  passwdinput.focus();
}

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullnameValue: 'John Doe',
      usernameValue: 'John',
      emailValue: 'john154@gmail.com',
      profileValue: avatar,
      userInfo: {
        fullname: 'John Doe',
        username: 'John',
        email: 'john154@gmail.com',
        profileLogo: avatar
      }
    };
    this.onFileDialogChange = this.onFileDialogChange.bind(this);
  }

  onFullNameChange = (event) => {
    this.setState({fullnameValue: event.target.value});
  }

  onUserNameChange = (event) => {
    this.setState({usernameValue: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({emailValue: event.target.value});
  }

  onSaveButtonClick = () => {
    this.setState({userInfo: {
      fullname: this.state.fullnameValue,
      username: this.state.usernameValue,
      email: this.state.emailValue,
      profileLogo: this.state.profileValue
    }});
    closeEditDialog();
  }

  onFileDialogChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      console.log(reader.result);
    };

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={this.state.userInfo.profileLogo} alt="Avatar" style={{width:'100px', height:'100px'}} />
          </div>
          <div className="flip-card-back">
            <h3>{this.state.userInfo.fullname}</h3>
            <button id='editbutton' onClick={() => {launchEditDialog()}} >Edit</button>
          </div>
        </div>
  
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span onClick={() => {closeEditDialog()}} className="close">&times;</span>
              <h1>Edit your profile</h1>
            </div>
            <div className="modal-body">
              <img alt='temp-logo' id='demo-profile' src={this.state.profileValue} style={{wigth: '100px', height: '100px'}} />
              <div id='set-profile-container' >
                <label htmlFor='file-chooser' id='set-profile' >Select Profile</label>
                <input onChange={e => this.onFileDialogChange(e)} type='file' name='photo' id='file-chooser' accept='image/*' />
              </div>
              <h3>Fullname</h3>
              <input maxLength='12' minLength='5' id='dialog-input' type='text' placeholder='Fullname' name='fullname' value={this.state.fullnameValue} onChange={this.onFullNameChange} />
              <h3>Username</h3>
              <input maxLength='8' minLength='5' id='dialog-input' type='text' placeholder='Username' name='username' value={this.state.usernameValue} onChange={this.onUserNameChange} /><br />
              <h3>Email</h3>
              <input type='text' placeholder='Email' value={this.state.emailValue} id='dialog-input' onChange={this.onEmailChange} /><br />
              <button onClick={() => {showPasswdArea()}} id='change-passwd' >Change Password</button>
              <div className='passwd-area'>
                <div className='passwd-content'>
                  <h3>Current Password</h3>
                  <div id='current-passwd-container'>
                    <input className='current-passwd' maxLength='12' minLength='8' id='dialog-input' type='password' placeholder='Current Password' />
                    <button className='fas fa-eye icon' id='show-button' onFocus={focusPasswdInput} onClick={() => toggleShowButton('current')} ></button>
                  </div>
                  <h3>New Password</h3>
                  <div id='new-passwd-container'>
                    <input className='new-passwd' maxLength='12' minLength='8' id='dialog-input' type='password' placeholder='New Password' />
                    <button className='fas fa-eye icon' id='show-button-new' onFocus={focusPasswdInput} onClick={() => toggleShowButton('new')} ></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className='dialog-button' onClick={this.onSaveButtonClick} >Save</button>
              <button className='dialog-button' onClick={() => {closeEditDialog()}} >Cancel</button>
            </div>
          </div>
        </div>

      </div> 
    )
  }
}

export default UserProfile;