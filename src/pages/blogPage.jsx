import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Blogpage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <div>
        <h1>Blogpage</h1>


                    {
                        posts.map(post => (
                            <Link key={post.id} to={`/posts/${post.id}`}>
                                <div class='grid'>
                                    <div>
                                    <li>{post.title}</li>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }


        </div>
    )
}

export {Blogpage};