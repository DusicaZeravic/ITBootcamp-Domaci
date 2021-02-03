const Launch = ({ name, date, img }) => {
    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>{name}</p>
            <p>{date}</p>
            <img src={img} alt="Img" />
        </div>
    )
}

export default Launch

