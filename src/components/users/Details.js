import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";
import { getUser, getUserRepos } from "../../context/github/GitHubActions";

const Details = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const { username } = useParams();

  useEffect(() => {

    
    dispatch({ type: "SET_LOADING" });

    const getUserData = async () => {
     
      const getUserData = await getUser(username);
      dispatch({type:'SEARCH_USER',payload:getUserData})

      const userRepos = await getUserRepos(username);
      dispatch({type:"GET_REPOS",payload:userRepos})
    };


    getUserData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    public_gists,
  } = user;

  if (loading) return <Spinner />;
  return (
    <div className="main">
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="avatar"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a
            href={html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Blog: </strong> {blog}
                </>
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
    </div>
  );
};

export default Details;
