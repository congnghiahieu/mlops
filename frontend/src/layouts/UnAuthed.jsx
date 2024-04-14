import React, { useEffect, useState } from "react";
import useAuth from "src/hooks/useAuth";
import { useLocation, Navigate } from 'react-router-dom';
import Loading from 'src/components/Loading';
import { paths } from "src/assets/data/routes";
import { Outlet } from 'react-router-dom'

export default function UnAuthed() {
    const { authed, refresh } = useAuth();
    const location = useLocation();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const refreshAuth = async () => {
            await refresh();
            setLoading(false);
        };

        refreshAuth();

        return () => {
            setLoading(true);
        };
    }, [refresh]);

    if (loading) {
        return <Loading />;
    }

    if (authed) {
        <Navigate to={paths.PROJECTS} replace state={{ path: location.pathname }} />;
    }

    return (<Outlet className="outlet" />);
}

