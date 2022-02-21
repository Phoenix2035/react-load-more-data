import { useState, useEffect } from "react"


function App() {
    const [posts, setPost] = useState([])
    const [morePosts, setMorePosts] = useState(3)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])


    const showMorePosts = () => {
        setMorePosts(prev => prev + 3)
    }

    return (
        <>
            <div className="container">
                {
                    posts?.slice(0, morePosts).map(item =>
                        <div className="card">
                            <div className="card-id">
                                <span>
                                    {item.id}
                                </span>
                            </div>
                            <p>{item.body}</p>
                        </div>
                    )}

            </div>

           <div className="btn">
                <button onClick={showMorePosts}>Load More</button>
           </div>
        </>
    );
}

export default App;
