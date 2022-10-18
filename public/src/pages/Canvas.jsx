import React, { useState } from 'react'
import styled from "styled-components";


import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'

const Canvas = () => {
  const { selectedObjects, editor, onReady } = useFabricJSEditor({ defaultStrokeColor: 'red' })
  const [text, setText] = useState("");
  const [strokeColor, setStrokeColor] = useState("");
  const [fillColor, setFillColor] = useState("");

  const onAddCircle = () => {
    editor?.addCircle()
  }
  const onAddRectangle = () => {
    editor?.addRectangle()
  }
  const onAddLine = () => {
    editor?.addLine()
  }
  const onAddText = () => {
    if (selectedObjects?.length) {
      return editor?.updateText(text)
    }
    editor?.addText(text);
  }
  const onSetStrokeColor = () => {
    editor?.setStrokeColor(strokeColor)
  }
  const onSetFillColor = () => {
    editor?.setFillColor(fillColor)
  }
  const onDeleteAll = () => {
    editor?.deleteAll();
  }
  const onDeleteSelected = () => {
    editor?.deleteSelected();
  }
  const onZoomIn = () => {
    editor?.zoomIn()
  }
  const onZoomOut = () => {
    editor?.zoomOut()
  }
  return (
    <Container>{editor ? (<div>
             <h1 className='heading'>Let's Draw</h1>
        <span className='center'>
          <button className="stbutton" onClick={onZoomIn}>Zoom In</button>
        <button className="stbutton" onClick={onZoomOut}>Zoom Out</button>
        <button className="stbutton" onClick={onAddCircle}>Add circle</button>
        <button className="stbutton" onClick={onAddRectangle}>Add Rectangle</button>
        <button className="stbutton" onClick={onAddLine}>Add Line</button>
        <button className="stbutton" onClick={onDeleteAll}>Delete All</button>
        <button className="stbutton" onClick={onDeleteSelected}>Delete Selected</button>
        </span>
        
        
        <input
          className="inputText"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className="stbutton" placeholder='Add Text' onClick={onAddText}>Add Text</button>
        <br/>
        <input
          className="inputText"
          type="text"
          value={strokeColor || editor.strokeColor}
          onChange={e => setStrokeColor(e.target.value)}
        />
        <button className="stbutton" placeholder='Stroke-Color' onClick={onSetStrokeColor}>Set Stroke Color</button>
        <input
          className="inputText"
          type="text"
          value={fillColor || editor.fillColor}
          onChange={e => setFillColor(e.target.value)}
        />
        <button className="stbutton" placeholder='Choose Color' onClick={onSetFillColor}>Set Fill Color</button>

        {/* <pre className='data'>fillColor: {editor.fillColor}, strokeColor: {editor.strokeColor}</pre> */}
        <pre className='data'>{JSON.stringify(selectedObjects)}</pre>

      </div>) : (<>Loading...</>)}
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
     
    </Container>
      
  )
}
const Container = styled.div`


justify-content: center;
  height: 100vh;
  width: 100vw;
.sample-canvas {
  height: 800px;
}
.stbutton{
  mbackground-color: #667af0;
  color: black;
  padding: 0.5rem 1rem;
  margin:0.5rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 0.6rem;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #4e00ff;
  }
}
  .center{
    left:200px
  }
  .inputText{
    
    padding: 0.2rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.2rem;
    color: grey;
    font-size: 0.8rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
}
.data{
  direction:flex;
  font-size:1rem
}
.heading{
  display: flex;
    align-items: center;
    padding:0.2rem;
    gap: 1.2rem;
    justify-content: center;
    h1 {
      color: white;
      text-transform: uppercase;
    }
}`
export default Canvas