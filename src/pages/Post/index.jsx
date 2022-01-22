import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsService } from "../../api/PostsService";
import { useFetching } from "../../hooks/useFetching";

const Post = () => {
    // console.log(useParams)
    const { post_id } = useParams()
    console.log('post_id', post_id);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const [fetching, isLoading, error] = useFetching(async () => {
        const response = await PostsService.getPostById(post_id);
        const post = await response.json();
        setTitle(post.title);
        setText(post.body);
    });

    useEffect(() => {
        fetching();
    }, []);


    return (
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Post