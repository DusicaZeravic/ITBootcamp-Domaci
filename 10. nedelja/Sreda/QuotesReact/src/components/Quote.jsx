import { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getQuoteById } from '../service';

const Quote = () => {
    const [quote, setQuote] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        let mounted = true;
        getQuoteById(id).then(res => {
            if(mounted) {
                setQuote(res.data);
            }
        })
        return () => mounted = false;
    }, [])

    return (
        <div>
            <p>{quote?.text}</p>
            <p>{quote?.author}</p>
        </div>
    )
    
}

export default Quote
