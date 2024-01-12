import React, {useState, useEffect} from 'react'
import { Link , useLocation} from "react-router-dom";
const Breadcrums = () => {
    const location = useLocation();
    const [url, setUrl] = useState(location.pathname)
    useEffect(() => {
        setUrl(location.pathname)
    }, [location.pathname])
    let crumbs = url.split('/').filter((x) => x)
    let breadcrumbPath = "";
  return (
    <>
    <div className="bread">
    <Link to="/">Home</Link>
    {
        crumbs.map((ele,i) => {
            breadcrumbPath += `/${ele}`;
            if (i === crumbs.length-1) {
                return(
                    <span key={breadcrumbPath}> {'>'} {ele}</span>
                )
            } else {
                return(
                    <span key={breadcrumbPath}> {'>'} <Link to={breadcrumbPath}>{ele}</Link> </span>
                )
            }
        })
    }
    </div>
    </>
  )
}

export default Breadcrums