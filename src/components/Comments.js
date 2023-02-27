
function Comments(props) {
    const comments = props.comments
    const spitComments = comments.map(comment => {
        return (
            <div key= {comment.id}>
                <h2>
                    {comment.user}
                </h2>
                <p>
                    {comment.comment}
                </p>
            </div>
        )
    })

    return (
        <div>
            <h1>
                {comments.length} Comments
            </h1>
            {spitComments}
        </div>
    )
}

export default Comments