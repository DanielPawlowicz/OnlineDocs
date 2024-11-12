import React, { useCallback, useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import "./styles.css"

const TextEditor = () => {

    const wrapperRef = useCallback(wrapper => {
        if(wrapper == null) return
        
        wrapper.innerHTML = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill(editor, { theme: "snow" });

    }, [])

    return <div className="container" ref={wrapperRef}></div>
  
}

export default TextEditor