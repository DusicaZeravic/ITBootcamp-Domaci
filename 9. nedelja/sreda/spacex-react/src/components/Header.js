import {useState, useEffect} from 'react'
import { getCompanyInfo } from "../service"

const Header = () => {
    const [info, setInfo] = useState('')

    useEffect(() => {
        getCompanyInfo().then(res => {
            setInfo(res.data.name);
        })
    }, [])

    return (
        <div>
            <h1>{info}</h1>
        </div>
    )
}

export default Header
