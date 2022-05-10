import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import queryString from 'query-string';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>App10</h1>

        <ul>
          <li>
            <NavLink exact to="/about/" activeStyle={navActiveStyle}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about/company/" activeStyle={navActiveStyle}>
              about company
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/" activeStyle={navActiveStyle}>
              profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog/" activeStyle={navActiveStyle}>
              blog
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/about/" component={AboutPage} />
          <Route exact path="/about/company/" component={AboutCompanyPage} />
          <Route exact path="/profile/" component={ProfilePage} />
          <Route path="/blog/:post_id/" component={PostDetail} />
          <Route path="/blog/" component={PostList} />
          <Route component={RouteNoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const navActiveStyle = {
  fontWeight: 'bold',
  background: 'yellow',
};

// // /about/
const AboutPage = () => {
  return (
    <div>
      <h1>AboutPage</h1>
    </div>
  );
};

// /about/company/
const AboutCompanyPage = () => {
  return (
    <div>
      <h1>AboutCompanyPage</h1>
    </div>
  );
};

// /profile/
const ProfilePage = ({ location }) => {
  const { token } = queryString.parse(location.search);

  return (
    <div>
      <h1>ProfilePage</h1>
      token: {token}
    </div>
  );
};

// /blog/
const PostList = ({ match }) => {
  return (
    <div>
      <h1>PostList</h1>
      <ul>
        <li>
          <Link to={`${match.url}100/`}>100번 포스팅</Link>
        </li>
        <li>
          <Link to={`${match.url}101/`}>101번 포스팅</Link>
        </li>
      </ul>
    </div>
  );
};

const PostDetail = ({ match }) => {
  console.log({ match });
  const {
    params: { post_id },
  } = match;

  const [post, setPost] = useState();

  useEffect(() => {
    console.log(`get post detail api 호출: ${post_id}`);
    setPost({ title: `포스팅 ${post_id}:`, content: `포스팅 ${post_id} 내용` });
  }, [post_id]);
  return (
    <div>
      <h2>PostDetail {post_id}</h2>
      {JSON.stringify(post)}
    </div>
  );
};

const RouteNoMatch = ({ location }) => {
  return <div>잘못된 경로로 접근 하였습니다. ({location.pathname})</div>;
};

export default App;
