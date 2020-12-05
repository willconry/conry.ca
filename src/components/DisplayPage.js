import React from 'react'
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function DisplayPage({file, page}) {
    
    return (
        <>
            <div className="page"> 
                <div className="page-container">
                    <Document file={file}> 
                        <Page className="page-preview" pageNumber={page} width={840} /> 
                    </Document> 
                </div>
            </div> 
        </>
    )
}

export default DisplayPage
