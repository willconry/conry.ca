import React from 'react'
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resume from '../static/will_conry_resume.pdf';

function DisplayPage({page}) {
    
    return (
        <>
            <div className="page"> 
            <div className="page-container">
                    <Document file={resume}> 
                        <Page className="page-preview" pageNumber={page} width={840} /> 
                    </Document> 
                </div>
            </div> 
        </>
    )
}

export default DisplayPage
