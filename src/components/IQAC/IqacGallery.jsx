import React, { useState } from 'react';
import Navbar from '../HomePage/navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import IqacNavbar from './IqacNavbar';
import { iqacData } from './iqacData';
import './IQAC.css';
import { Modal } from 'react-bootstrap';

const IqacGallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (src) => {
        setSelectedImage(src);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-4">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">GALLERY</h1>

                    <div className="iqac-gallery-grid">
                        {iqacData.gallery.map((img, idx) => (
                            <div key={idx} className="iqac-gallery-item" onClick={() => openImage(img.src)}>
                                <img src={img.src} alt={img.alt} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Body className="p-0">
                    {selectedImage && <img src={selectedImage} alt="Full View" style={{ width: '100%' }} />}
                </Modal.Body>
            </Modal>

            <Footer />
        </div>
    );
};
export default IqacGallery;
