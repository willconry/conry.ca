import React from 'react'
import { Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document } from 'react-pdf';

function DisplayPage({url}) {
    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
    const cors = "https://cors-anywhere.herokuapp.com/"
    
    return (
        <>
            <div className="page"> 
                <div className="page-container">
                    <Document file={cors + url}> 
                        <Page className="page-preview" pageNumber={1} width={840} /> 
                    </Document> 
                </div>
            </div> 
        </>
    )
}

export default DisplayPage
