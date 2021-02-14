import { Redirect, Link } from 'react-router-dom';

const Quotes = ({ quotes, user }) => {

    return user ? (
        <div>
            {
                <>
                    <h1>Quotes</h1>
                    {quotes.map(quote => {
                        return (
                            <div key={quote.id}>
                                <Link to={`/quotes/${quote.id}`}>{quote.text}</Link>
                            </div>
                        )
                    }
                    )}
                </>
            }
        </div>
    )
        :
        <Redirect to='/login' />
}

export default Quotes
