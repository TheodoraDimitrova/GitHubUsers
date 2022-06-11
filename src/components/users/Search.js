import React, { useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import {searchUsers} from '../../context/github/GitHubActions'

const Search = () => {
    
  const {  users ,dispatch } = useContext(GithubContext);
  const { setAlert,removeAlert } = useContext(AlertContext);

  const [text, setText] = useState('');
  

 
  const onChange = e => {
    setText(e.target.value);
    removeAlert()
  };
  const onSubmit = async(e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter name', 'error');
    } else {   
      dispatch({type:'SET_LOADING'})  
      const users= await searchUsers(text);
      dispatch({type:'SEARCH_USERS',payload:users})
      setText('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={()=>dispatch({type:'CLEAR_USERS'})}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
