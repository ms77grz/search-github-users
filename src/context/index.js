import React, { useState, useEffect, useContext } from 'react';

import { mockUser, mockRepos, mockFollowers } from './mockData';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);
  const [repos, Repos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  return (
    <GithubContext.Provider value={{ user, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => useContext(GithubContext);

export { GithubProvider, useGithubContext };
