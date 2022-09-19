import { useNavigate } from "react-router-dom";

export default function LoginRoute() {
    const navigate = useNavigate();

    const navigateToProfile = () => {
        // 👇️ navigate to /profile
        navigate('/profile');
      };

      
    return navigateToProfile();
};