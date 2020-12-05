import React from 'react'
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function DisplayPage({url, page}) {

    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
    const cors = "https://cors-anywhere.herokuapp.com/"
    
    return (
        <>
            <div className="page"> 
                <div className="page-container">
                    <Document file={cors + url}> 
                        <Page className="page-preview" pageNumber={page} width={840} /> 
                    </Document> 
                </div>
            </div> 
        </>
    )
}

export default DisplayPage
