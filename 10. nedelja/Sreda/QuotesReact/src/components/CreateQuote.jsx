import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postQuote } from '../service';

const CreateQuote = ({ setQuotes }) => {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <div>
            <h1>Create Qoute</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                let quote = {
                    id: uuidv4(),
                    text: text,
                    author: author
                }

                postQuote(quote).then(() => {
                    setQuotes(prev => [...prev, quote]);
                });

                setText('');
                setAuthor('');
            }}>
                <textarea value={text} cols="40" rows="10" placeholder='Enter quote...' onChange={(e) => setText(e.target.value)}></textarea>
                <div>
                    <input value={author} type='text' placeholder='Enter author...' onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    <input type='submit' value='Send Quote' />
                </div>
            </form>
        </div>
    )
}

export default CreateQuote
