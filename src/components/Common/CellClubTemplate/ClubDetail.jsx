import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CellClubTemplate from './CellClubTemplate';
import { clubsData } from './clubsData';

const ClubDetail = () => {
    const { id } = useParams();
    const [club, setClub] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundClub = clubsData.find(c => c.id === id);
        setClub(foundClub);
        setLoading(false);
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return null; // Or a spinner

    if (!club) {
        return <Navigate to="/student-centric-activities" replace />;
    }

    return <CellClubTemplate {...club} />;
};

export default ClubDetail;
