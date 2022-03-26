import React from 'react'
import cv from '../../public/documents/cv.pdf'

const Curriculum = () => {
    return <>
        <iframe
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
                border: "none",
                margin: 0,
                padding: 0,
                overflow: "hidden",
                zIndex: 999999,
            }}
            src={cv}
            width="100%"
            height="100%"
        />
    </>
}

export default Curriculum
