import React from 'react'
import ReactDom from 'react-dom/client'
import { GifExpertApp } from "./GifExpertApp";
import './style.css'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GifExpertApp/>
    </React.StrictMode>
)