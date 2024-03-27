"use client"
import React, { useState } from 'react'

interface VideoModal {
    thumbnailSrc: string,
    videoSrc: string,
    title?: string,
}

function VideoModal({ thumbnailSrc, videoSrc, title }: VideoModal) {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div className="relative">
                <img src={thumbnailSrc} alt={title}  onClick={openModal} className="cursor-pointer" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg fill="#FFFFFF" width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={openModal}>
                        <path  d="M5,21 L5,3 C5,2.20883421 5.87524596,1.73099262 6.54075759,2.15882152 L20.5407576,11.1588215 C21.1530808,11.5524579 21.1530808,12.4475421 20.5407576,12.8411785 L6.54075759,21.8411785 C5.87524596,22.2690074 5,21.7911658 5,21 Z M7,19.1683345 L18.1507426,12 L7,4.8316655 L7,19.1683345 Z" />
                    </svg>
                </div>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
                    <div className="relative w-3/4 max-w-screen-lg">
                        <button className="absolute top-4 right-4 text-white" onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                        <iframe width="961" height="541" src="https://www.youtube.com/embed/B_DPb25Zkd8" 
                                allowFullScreen
                        >

                        </iframe>
                            {/* <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.google.com"
                                title={title}
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                frameBorder="0"
                            ></iframe> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

export default VideoModal