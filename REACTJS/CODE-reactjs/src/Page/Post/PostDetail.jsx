import React, { useEffect, useState } from 'react';
import axiosJsonPlaceholder from 'libraries/axiosClient';
import { Link, useParams } from 'react-router-dom';
import { LOCATION } from 'constants';

function PostDetail(props) {
  const params = useParams()
  ;
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});

  const getPostDetail = async() => {
    try {
      const response = await axiosJsonPlaceholder.get(
        // '/posts/18'
        `/posts/${params.id}`,
      );
      setPost(response.data);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  const getAuthor = async() => {
    try {
      const response = await axiosJsonPlaceholder.get(
        `/users/${post.userId}`,
      );
      setAuthor(response.data);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  
  useEffect(() => {
  getPostDetail();
  }, []);

  useEffect(() => {
  if (post.userId){
    getAuthor();
  }
  }, [post.userId]);

  console.log('««««« post »»»»»', post);
  return (
    <div className='text-black'>
      <h1 className='m-3 text-black' >
        Component post detail
      </h1>
      <h3 className='m-3 text-black '>{post.title}</h3>
      <p className='m-3'>{post.body}</p>
      <p>Tác giả:{author.name} </p>
      <p>email:{author.email} </p>
      <p>
       <span className='me-2'>Tài Khoản:</span> 
        {
          console.log('««««« author.userId »»»»»', author)
        }
       <Link to={`${LOCATION.USERS}/${author.id}`} >{author.username}</Link>

      </p>
    </div>

  );
}

export default PostDetail;