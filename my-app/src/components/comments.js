import {useState, useEffect}  from 'react'
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Comments(props) {
    const [comms, setComms] = useState([])
    const params = useParams();
    const post_id = parseInt(params.id)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
        .then((response) => response.json())
        .then(data => setComms(data))
    })
    return (
        <div class="comments">
            {comms.map(comm => (
                <div className="comment">
                    <div class="comment__name">{comm.name}</div>
                    <div class="comment__email">{comm.email}</div>
                    <div class="comment__body">{comm.body}</div>
                </div>
                )
            )}
            <div class="comments__back-button">
                <Link to={'/'}>
                    <input type="submit" value="Назад"></input>
                </Link>
            </div>
        </div>
    );
}