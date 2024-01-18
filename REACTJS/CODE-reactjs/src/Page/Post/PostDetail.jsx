import React, { useEffect, useState } from "react";
import axiosJsonPlaceholder from "libraries/axiosClient";
import { Link, useParams } from "react-router-dom";
import { LOCATION } from "constants";

function PostDetail(props) {
  const params = useParams();
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});
  const [comments, setComments] = useState([]);

  const getPostDetail = async () => {
    try {
      const response = await axiosJsonPlaceholder.get(
        // '/posts/18'
        `/posts/${params.id}`
      );
      setPost(response.data);
    } catch (error) {
      console.log("««««« error »»»»»", error);
    }
  };

  const getAuthor = async () => {
    try {
      const response = await axiosJsonPlaceholder.get(`/users/${post.userId}`);
      setAuthor(response.data);
    } catch (error) {
      console.log("««««« error »»»»»", error);
    }
  };
  const getComments = async () => {
    try {
      const response = await axiosJsonPlaceholder.get(
        `/users/${params.userId}/comments`
      );
      setComments(response.data);
    } catch (error) {
      console.log("««««« error »»»»»", error);
    }
  };

  useEffect(() => {
    getPostDetail();
    getComments();
  }, []);

  useEffect(() => {
    if (post.userId) {
      getAuthor();
    }
  }, [post.userId]);

  console.log("««««« post »»»»»", post);
  return (
    <div className="text-black">
      <h1 className="m-3 text-black">Component post detail</h1>
      <h3 className="m-3 text-black ">{post.title}</h3>
      <p className="m-3">{post.body}</p>
      <p>Tác giả:{author.name} </p>
      <p>email:{author.email} </p>
      <p>
        <span className="me-2">Tài Khoản:</span>
        {console.log("««««« author.userId »»»»»", author)}
        <Link to={`${LOCATION.USERS}/${author.id}`}>{author.username}</Link>
        <ul>
          {comments.length &&
            comments.map((comment) => (
              <li key={comment.id}>
                <div>
                  <a class="me-3 d-flex " href="#">
                    <img
                      class="rounded-circle shadow-1-strong"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                      alt="avatar"
                      width="65"
                      height="65"
                    />
                <p>{comment.name}</p>
                  </a>
                </div>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
              </li>
            ))}
        </ul>
      </p>
    </div>
  );
}

export default PostDetail;
