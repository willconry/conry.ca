import React from 'react'
import { Page, pdfjs } from 'react-pdf'
import './Resume.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document } from 'react-pdf/dist/esm/entry.webpack';

function Resume() {
    const url =  "https://cors-anywhere.herokuapp.com/https://s3.ca-central-1.amazonaws.com/conry.ca/will_conry_resume.pdf"
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
    
    return (
        <>
            <div className="resume"> 
            <div className="wrapper">
                <div className="resume-container">
                    <Document file={url}> 
                        <Page className="resume-preview" pageNumber={1} scale={1.5} /> 
                    </Document> 
                </div>
            </div>
            </div> 
        </>
    )
}

export default Resume
