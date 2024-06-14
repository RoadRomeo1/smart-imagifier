import React, { useState } from "react"
import "./index.css"
import { getImageAnalysisInfo } from "./api/ImageAnalysis"
import { generateImage } from "./api/ImageGeneration"

function App() {
  const [response, setResponse] = useState({})
  const [imageUrl, setImageUrl] = useState({ url: "" })
  const [prompt, setPrompt] = useState("")

  const handleImageAnalysis = () => {
    setResponse(getImageAnalysisInfo(imageUrl))
    console.log(`Image URl: ${imageUrl}`)
    console.log(`Response from the API: ${response}`)
  }
  const handleImageGeneration = () => {
    const result = generateImage(prompt)
    console.log(result)
    //handleResponse()
  }

  const handleResponse = async () => {
    const { error } = await response.then((res) => res[2].error)
    setResponse(error)
  }

  return (
    <>
      <div>
        <h1>Imagifier</h1>
        <label>Inser URL or type prompt:</label>
        <br />
        <input className="input" placeholder="Enter Image url for image analysis here" onChange={(e) => setImageUrl({ url: e.target.value })}></input>
        <br />
        <button className="btn" onClick={handleImageAnalysis}>
          Analyze Image
        </button>
        <br />
        <input className="input" placeholder="Enter Image url or prompt for image generation here" onChange={(e) => setPrompt(e.target.value)}></input>
        <br />
        <button className="btn" onClick={handleImageGeneration}>
          Generate Image
        </button>
        <hr />
        <span>Response: {JSON.stringify(response)}</span>
      </div>
    </>
  )
}

export default App
