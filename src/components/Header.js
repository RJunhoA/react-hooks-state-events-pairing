import { useState } from "react"
import Comments from "./Comments"
function Header(props) {
    const {title, views, createdAt, upvotes, downvotes, comments} = props.data
    const [upVote, setUpVote] = useState(upvotes)
    const [downVote, setDownVote] = useState(downvotes)
    const [toggleComments, setToggleComments] = useState(true)
    const handleUpVote = () => {
        setUpVote(upVote + 1)
    }
    const handleDownVote = () => {
        setDownVote(downVote + 1)
    }
    const handleCommentBox = () => {
        setToggleComments((toggleComments) => !toggleComments)
    }
    return (
        <div>
            <h1>
                {title}
            </h1>
            <section>
                {views} Views |
                Uploaded {createdAt}
            </section>
            <button onClick={handleUpVote}>
                {upVote} 👍
            </button>
            <button onClick={handleDownVote}>
                {downVote} 👎
            </button>
            <button onClick={handleCommentBox}>
                {toggleComments ? "Hide Comments" : "Show Comments"}
            </button>
            <div onClick={handleCommentBox}>
                {toggleComments ? <Comments comments={comments}/> : ""}
            </div>
        </div>
    )
}

export default Header