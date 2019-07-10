import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const Details = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading,getUserRepos,repos } = githubContext;

  useEffect(() => {
    //componentDidMount
    const username = match.params.username;
    getUser(username);
    getUserRepos(username);
    //eslint-disable-next-line
  }, []); //run once

  const {
    login,
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Blog: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-light">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-danger">Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public_gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};


export default Details;
