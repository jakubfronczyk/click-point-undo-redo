import React, { useState } from "react";

function App() {

  const [points, setPoints] = useState([])
  const [poppedPoints, setPoppedPoints] = useState ([])


  const handleClickCircle = (e) =>{
    const {clientX, clientY} = e
    setPoints([
      ...points,
      {
      x: clientX,
      y: clientY
    }])
  }

  const handleUndo = () => {
    const newPoints = [...points]
    const popped = newPoints.pop()
    if (!popped) return alert("Nothing to UNDO")
    setPoppedPoints([...poppedPoints, popped])
    setPoints(newPoints)
  }
  
  const handleRedo = () => {
    const newPopped = [...poppedPoints]
    const popped = newPopped.pop()
    if (!popped) return
    setPoppedPoints(newPopped)
    setPoints([...points, popped])
  }

  return (
    <>
    <div className="buttons">
    <button disabled={points.length === 0} className="undo" onClick={handleUndo}>UNDO</button>
    <button disabled={poppedPoints.length === 0} className="redo" onClick={handleRedo}>REDO</button>
    </div>
    <div className="App" onClick={handleClickCircle}>
      {points.map(point => (
          <div className="point" style={{
            left:point.x - 5 + "px",
            top: point.y - 5 + "px",
          }}></div>
        ))}
    </div>
    </>
  );
}

export default App;
