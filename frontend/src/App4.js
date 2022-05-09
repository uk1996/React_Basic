import React, { useCallback, useEffect, useState } from 'react';

const PostDetailComponent = ({ post: { title, content } }) => {
  return (
    <div>
      <h1>{title}</h1>
      {content}
    </div>
  );
};

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState();

  useEffect(() => {
    console.log('changed postId');
    setPost({ title: '포스팅 제목', content: `포스팅 내용 ...: ${postId}` });
  }, [postId]);

  return (
    <div>
      <h1>Post #{postId}</h1>
      {!post && '로딩중...'}
      {post && <PostDetailComponent post={post} />}
    </div>
  );
};

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      // unmount 시에 호출
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <span>현재시각: {date.toISOString().slice(11, 19)}</span>
    </div>
  );
};

const App = () => {
  //   const [value1, setValue1] = useState(0);
  //   const [value2, setValue2] = useState(0);
  const [value, setValue] = useState({ value1: 0, value2: 0 });
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    console.log('mount, logic#1');
  }, []); // mount시에만 호출

  useEffect(() => {
    console.log('changed value: ', value);
  }, [value]); // value가 변경될 시에 호출

  const onClick = useCallback(() => {
    setValue((prevState) => ({ ...prevState, value1: prevState.value1 + 10 }));
  }, []); // mount 될때에만 함수 생성

  return (
    <div>
      <Clock />
      <hr />
      {JSON.stringify(value)}
      <button onClick={onClick}>click</button>
      <hr />
      <button onClick={() => setPostId(100)}>100번 글 보기</button>
      <PostDetail postId={postId} />
      <hr />
    </div>
  );
};

export default App;
