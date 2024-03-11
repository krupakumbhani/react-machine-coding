import React from 'react'
import { useState } from "react";
const Infinitebox = ({ data }) => {
    const [viewtoggle, setViewtoggle] = useState(Array(data.length).fill(false));
    const [replybox, setReplybox] = useState(Array(data.length).fill(false));
    const [comments, setComments] = useState(data.map(() => ({ reply: [] })));

    function handleviewtoggle(indx) {
        const newviewtoggle = [...viewtoggle];
        newviewtoggle[indx] = !newviewtoggle[indx];
        setViewtoggle(newviewtoggle);
    }
    function handlereply(indx) {
        const newviewtoggle = [...viewtoggle];
        newviewtoggle[indx] = !newviewtoggle[indx];
        setViewtoggle(newviewtoggle);
        const newreplybox = [...replybox];
        newreplybox[indx] = true;
        setReplybox(newreplybox);
    }

    const makeComment = (index) => {
        const newReplyBox = [...replybox];
        newReplyBox[index] = false;
        setReplybox(newReplyBox);

        const newComments = [...comments];
        newComments[index].reply.push({ comment: newComments[index].replyText });
        newComments[index].replyText = '';
        setComments(newComments);
    };

    const handleCommentChange = (event, index) => {
        const newComments = [...comments];
        newComments[index].replyText = event.target.value;
        setComments(newComments);
    };
    console.log('data',data)

    return (
        <>
            {
                data.map((item, indx) => (
                    <div key={indx} className='commentbox'>
                        <div>{item.comment}</div>
                        <button onClick={() => handlereply(indx)}>reply</button>
                        {
                            item.reply && <button onClick={() => handleviewtoggle(indx)}>{viewtoggle[indx] ? "hide replies" : "view replies"}</button>
                        }
                        {
                            replybox[indx] && <div>
                                <input type="text" value={comments[indx].replyText} onChange={(event) => handleCommentChange(event, indx)} />
                                <button onClick={() => makeComment(indx)}>send</button>
                            </div>
                        }
                        {comments[indx].reply.map((reply, replyIndex) => (
                            <div key={replyIndex}>{reply.comment}</div>
                        ))}
                        {
                            viewtoggle[indx] && item.reply ? <div style={{ marginLeft: "20px" }}>{item.reply ? <Infinitebox key={item.id}
                                data={item.reply} /> : ""}</div> : ''
                        }
                    </div>

                )
                )
            }

        </>
    )
}

export default Infinitebox