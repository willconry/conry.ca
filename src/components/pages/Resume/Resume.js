import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import './Resume.css'

function Resume() {
    const url =  "https://cors-anywhere.herokuapp.com/https://github.com/willconry/resume/raw/master/will_conry_resume.pdf"
  
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
    // const [numPages, setNumPages] = useState(null)
    // const [pageNumber, setPageNumber] = useState(1)
    
    return (
        <>
            <div className="resume"> 
                <div className="resume-container">
                    <Document file={url} className="resume-preview"> 
                        <Page pageNumber={1} scale={1.5} /> 
                    </Document> 
                </div>
            </div> 
        </>
    )
}

export default Resume
