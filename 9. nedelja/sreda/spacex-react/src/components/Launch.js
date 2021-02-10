const Launch = ({ name, date, img }) => {
    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>{name}</p>
            <p>{date}</p>
            <img src={img} alt={`Img for ${name} launch`} />
        </div>
    )
}

export default Launch

