import { useParams } from "react-router-dom"

const Post = () => {
    // console.log(useParams)
    const { post_id } = useParams()
    console.log('post_id', post_id);

    return (
        <div>
            post detail page
        </div>
    )
}

export default Post