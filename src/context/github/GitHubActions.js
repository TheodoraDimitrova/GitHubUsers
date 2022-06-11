import axios from "axios";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_URL;
  githubClientSecret = process.env.REACT_APP_GITHUB_MY_TOKEN;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

export const searchUsers = async (text) => {
  const res = await axios.get(
    `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  return res.data.items;
};

export const getUser = async (username) => {
  const res = await axios
    .get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    )
    .then()

    .catch((e) => {
      window.location = "/notfound";
    });

  return res.data;
};

export const getUserRepos = async (username) => {
  const res = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  return res.data;
};
