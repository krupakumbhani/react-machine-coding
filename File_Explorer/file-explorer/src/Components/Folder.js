import React, { useState } from 'react'

const Folder = ({handleInsertNode = ()=>{}, data, handleDelete = () => {} }) => {
    const [isExpand, setIsExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible : false,
        isFolder : false
    })
    function handleNewFolder(e, isFolder) {
        e.stopPropagation();
        setIsExpand(true)
        setShowInput({visible : true, isFolder})
    }
    function onaddFolder(e) {
        if(e.keyCode === 13 && e.target.value ){
            setShowInput({ ...showInput, visible: false }); 
            handleInsertNode(data.id, e.target.value, showInput.isFolder)
        }
    }
    if (data.isFolder) {
        return (
            <>
                <div style={{ marginTop: 5 }}>
                    <div className='folder-wrapper' onClick={() => setIsExpand(!isExpand)}>
                        <span className='folder-box'>📁 {data.name}</span>
                        <div className='folder-btn-box'>
                            <button onClick={(e) => handleNewFolder(e, true)}>Folder+</button>
                            <button onClick={(e) => handleNewFolder(e, false)}>File+</button>
                            <button onClick={(e) => handleDelete(data.id)}>Delete</button>
                        
                        </div>
                    </div>
                    <div style={{ paddingLeft: 25 , display : isExpand ? 'block' : 'none' }}>
                        {
                            showInput.visible && (
                            <div className="input">
                                <span>{showInput.isFolder ? "📁": "🗄"}</span>
                                <input type="text" autoFocus onKeyDown={onaddFolder} onBlur={()=>setShowInput({...showInput,
                                    visible:false})} />
                            </div>
                        )}
                        {
                            data.items.map((ele) => {
                                return <Folder key={ele.id} data={ele} handleInsertNode={handleInsertNode} handleDelete={handleDelete}/>
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <div className='file-box'>🗄 {data.name}</div>
        )
    }

}

export default Folder