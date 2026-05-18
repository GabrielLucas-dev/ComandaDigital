import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function useAuth() {
    
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if(!token) {
            alert("Sessão expirada, faça login novamente!")
            navigate("/login");
        }
    }, [navigate]);
}