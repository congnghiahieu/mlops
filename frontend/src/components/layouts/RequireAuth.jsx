import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth"
import { useLocation, Navigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import { paths } from "../../assets/data/routes";

export default function RequireAuth({ children }) {
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

    return authed ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}
