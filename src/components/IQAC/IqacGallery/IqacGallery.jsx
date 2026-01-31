import React, { useState } from 'react';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import IqacNavbar from '../IqacNavbar';
import { iqacData } from '../iqacData';
import '../IQAC.css';
import './IqacGallery.css';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const IqacGallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showArchive, setShowArchive] = useState(false);

    const openImage = (src) => {
        setSelectedImage(src);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    const toggleArchive = () => {
        setShowArchive(!showArchive);
    };

    // Safely access properties, defaulting to empty arrays if undefined
    const currentImages = iqacData.gallery?.current || [];
    const archivedImages = iqacData.gallery?.archived || [];

    return (
        <div className="iqac-wrapper">
            <Navbar />
            <div className="iqac-container container-fluid p-0">
                <IqacNavbar />
                <div className="iqac-content">
                    <h1 className="iqac-section-title">Gallery</h1>

                    {/* Current Images Section */}
                    {currentImages.length > 0 ? (
                        <div className="iqac-gallery-grid">
                            {currentImages.map((img, idx) => (
                                <div key={idx} className="iqac-gallery-item" onClick={() => openImage(img.src)}>
                                    <img src={img.src} alt={img.alt || 'Gallery Image'} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted mt-3">No recent images available at the moment.</p>
                    )}

                    {/* Archived Images Section */}
                    {archivedImages.length > 0 && (
                        <div className="archived-section">
                            <button
                                className={`archive-toggle ${showArchive ? 'active' : ''}`}
                                onClick={toggleArchive}
                                aria-expanded={showArchive}
                            >
                                <span>Archived Images</span>
                                <FontAwesomeIcon icon={showArchive ? faChevronUp : faChevronDown} className="ml-2" />
                            </button>

                            <div className={`archive-collapse ${showArchive ? 'show' : ''}`}>
                                <div className="iqac-gallery-grid">
                                    {archivedImages.map((img, idx) => (
                                        <div key={idx} className="iqac-gallery-item" onClick={() => openImage(img.src)}>
                                            <img src={img.src} alt={img.alt || 'Archived Image'} loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
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
