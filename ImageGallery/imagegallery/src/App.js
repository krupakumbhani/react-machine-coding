import './App.css';
import { useState } from "react";
import imageurls from "./utils/imageurls";
import Modal from "react-overlays/Modal";

function App() {
  const [imgurls, setImgurls] = useState(imageurls);
  const [showModal, setShowModal] = useState(false);
  const [currentimg, setCurrentimg] = useState('')
  const [currentimgindx, setCurrentimgindx] = useState(0)
  const totalimages = imgurls.length;
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  const handleClose = () => setShowModal(false);
  const showimage = (item, indx) => {
    setShowModal(true)
    setCurrentimg(item)
    setCurrentimgindx(indx)
  }
  console.log('currentimgindx', totalimages)
  return (
    <>
      <h1>Image Gallery</h1>
      <div className='imagecontainer'>
        {
          imgurls && imgurls.map((item, indx) => {
            return (
              <div key={indx} className='imgbox' onClick={() => showimage(item, indx)}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </div>
      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div className='modalbox'>
        <div>
              <span className="close-button" onClick={handleClose}>
                x
              </span>
            </div>
          <div className="modal-header">
           <div>
           <button onClick={() => currentimgindx === 0 ? setCurrentimgindx(totalimages-1) : setCurrentimgindx(currentimgindx-1)}>◀</button>
           {/* {
                currentimgindx > 0 ? 
                <button onClick={() => setCurrentimgindx(currentimgindx-1)}>◀</button> : 
                ''
              } */}
           
           </div>
            <div>
              <img src={imgurls[currentimgindx]} alt={currentimgindx} />
            </div>
            <div> 
            <button onClick={() => setCurrentimgindx((currentimgindx+1) % totalimages)}>▶</button>
              {/* {
                currentimgindx < totalimages-1 ? 
                <button onClick={() => setCurrentimgindx(currentimgindx+1)}>▶</button> : 
                ''
              } */}
            
           </div>
          </div>
        </div>
      </Modal>

    </>
  );
}

export default App;
