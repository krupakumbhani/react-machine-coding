import './App.css';
import { useState, useEffect } from "react";
function App() {
  const [words, setWords] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [show, setshow] = useState(false);
  const [detail, setDetail] = useState({description: '', image: ''});

  useEffect(() => {
      fetch('https://dummyjson.com/products?limit:100&skip=1').then((res) => res.json()).then((res) => setWords(res.products));
  }, [])
  const handleChange = (e) => {
    const word = e.target.value
    setSearch(word);
    if (word.trim().length > 0) {
      const filterdata = words.filter((each) => each.title.toLowerCase().includes(word.toLowerCase()));
    setFiltered(filterdata.slice(0,10))
    setshow(true)
    } else {
      setFiltered([])
      setshow(false)
      
    }
   
  }
  function selectitem(item) {
   setSearch(item.title)
   setshow(false)
   setDetail({
    description: item.description,
    image:item.images[0]
  })
  }
  function clearsearch() {
    setSearch('');
    setshow(false);
    setFiltered([]);
    setDetail({ description: '', image: '' });
  }
  

  return (
    <>
    {/* <label className='searchlabel'>Search Product</label> */}
    <div className='inbox'>
    <input autoFocus className='searchbox' type="text" value={search} onChange={(e) => handleChange(e)} />
    <button className='clear' onClick={clearsearch}>
      ❌
    </button>
    </div>
   
    
    <div className="dropdown" style={{display : show ? 'block' : 'none'}}>
      {
        search.trim().length > 0 && filtered && filtered.map((item,indx) => (
          <p key={indx} onClick={() => selectitem(item)}>
            {item.title}
          </p>
        ))
      }
    </div>
    <div style={{display : show ? 'none' : 'block'}}>
      <p>{detail.description}</p>
      <img src={detail.image} />
    </div>
    </>
  );
}

export default App;
