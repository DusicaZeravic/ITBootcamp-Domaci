import { Redirect } from 'react-router-dom';

const Quotes = ({ quotes, user }) => {

    return (
        <div>
            {
                user ?
                    <>
                        <h1>Quotes</h1>
                        {quotes.map(quote => <p key={quote.id}>{quote.text} - {quote.author}</p>)}
                    </>
                    :
                    <Redirect to='/login' />
            }



        </div>
    )
}

export default Quotes
