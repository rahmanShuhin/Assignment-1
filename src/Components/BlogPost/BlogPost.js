import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { loadData } from "../Context/DataContext";

const BlogPost = () => {
    const { id } = useParams();
    const [data] = useContext(loadData);
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const getPost = data.find((x) => x.id === parseInt(id));
        console.log(getPost);
        setPost(getPost);
    }, [id, data]);
    useEffect(() => {
        if (post) {
            fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`)
                .then((response) => response.json())
                .then((json) => setAuthor(json));
        }
    }, [post]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((json) => setComments(json));
    }, [id]);
    const handleAddComment = (e) => {
        e.preventDefault();
        const newCom = [
            ...comments,
            {
                postId: 2,
                name: "Ervin Howell",
                email: "Shanna@melissa.tv",
                body: e.target[0].value,
            },
        ];
        setComments(newCom);
        e.target.reset();
    };
    return (
        <div className="blogPost">
            <div className="blogPost__top">
                <h2>{post?.title}</h2>
                <small>
                    Post By : <Link>{author?.name}</Link>{" "}
                </small>
                <p>{post?.body}</p>
            </div>
            <div className="blogPost__bottom">
                <h2>Comments</h2>
                {comments.map((x) => (
                    <div className="blogPost__comment">
                        <p>{x.name}</p>
                        <p>{`"${x.body}"`}</p>
                    </div>
                ))}
                <div>
                    <form onSubmit={handleAddComment}>
                        <textarea
                            name="comment"
                            cols="30"
                            rows="5"
                            required
                            placeholder="Write Something......."
                        ></textarea>
                        <button className="button__basic" type="submit">
                            Add Comment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
