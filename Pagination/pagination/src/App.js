import './App.css';
import { useEffect, useState } from "react";
import uuid from 'react-uuid'
function App() {
  const [data, setData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  function fetchData() {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((result) => setData(result.products))
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Pagination</h1>
      <div className="flexgrid">
      {data && data.length > 0 &&
        data.slice(pageNo*10-10,pageNo*10).map((ele, i) => {
          return (
            <div className="col">
              <div className='card' key={uuid()}>
                <div className="image">
                  <img width={200} height={150} src={ele.images[0]} alt={ele.title} onError="https://cdn.dummyjson.com/product-images/1/1.jpg" />
                </div>
                <div className="cardbody">
                  <div className="title">{ele.title}</div>
                  <div className="price">₹ {ele.price}</div>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
      <div className="pagination">
        <span className={pageNo>1 ? 'arrow' : 'hide'} onClick={()=>setPageNo(pageNo-1)}>◀</span>
        {[...Array(data.length/10)].map((_,i) => {
          return(
            <span key={i} className={pageNo === i+1 ? 'selected pagebox' : 'pagebox'} onClick={()=>setPageNo(i+1)}>{i+1}</span>
          )
        })
        }
        
        <span className={pageNo< data.length /10 ? 'arrow' : 'hide'} onClick={()=>setPageNo(pageNo+1)}>▶</span>
      </div>
    </>
  );
}

export default App;
