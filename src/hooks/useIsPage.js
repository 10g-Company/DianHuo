import { useLocation } from 'react-router-dom';

const useIsPage = (path) => {
    const location = useLocation();
    return location.pathname === path;
};

export default useIsPage;