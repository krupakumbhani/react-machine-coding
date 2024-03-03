import { useState, useEffect } from "react";
import './App.css';

function App() {
  const endpoint = 'https://hacker-news.firebaseio.com/v0';
  const jobsize = 6;
  const [jobs, setJobs] = useState(null)
  const [jobdetail, setJobdetail] = useState([])
  const [currentpage, setCurrentpage] = useState(0)
  const [fetching, setFetching] = useState(false)


  useEffect(() => {
    fetchjobs(currentpage)
  }, [currentpage])

  async function fetchjobs(currpage) {
    setCurrentpage(currpage)
    setFetching(true)
    let joblist = jobs
    if (joblist == null) {
      const response = await fetch(`${endpoint}/jobstories.json`);
      joblist = await response.json();
      setJobs(joblist)
    }
    const jobidperpage = joblist.slice(currpage * jobsize, (currpage * jobsize) + jobsize)
    const jobsperpage = await Promise.all(
      jobidperpage.map((items, indx) => fetch(`${endpoint}/item/${items}.json`).then((res) => res.json()))
    );
    setJobdetail(prevJobdetail => [...prevJobdetail, ...jobsperpage])
    setFetching(false)
  }

  return (
    <>
      <h1>HACKER NEWS JOB BOARD</h1>
      {
        jobdetail && jobdetail.map((item, indx) => (
          <div className="card" key={item}>
            <p className="card-title">
             <a href={item.url} className={item.url ? '' : 'inactiveLink'} >
             {item.title}
             </a>
              </p>
            <div className="card-des">
              <p>{item.by}</p>
              <p>{new Date(item.time * 1000).toLocaleString()}</p>
            </div>

          </div>
        ))
      }
      {
        jobdetail.length > 0 &&
        currentpage * jobsize + jobsize < jobs.length &&  <button className="btn" onClick={() => setCurrentpage(currentpage + 1 ) }>{fetching ? 'loading...' : 'load More'}</button>
      }
     
    </>
  );
}

export default App;
