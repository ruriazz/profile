import "./assets/css/style.css";
import "./assets/css/media_query.css";
import Home from "./components/Home";
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("show");
            });
        });

        const hiddenElements = document.querySelectorAll(".reveal");
        hiddenElements.forEach((el) => observer.observe(el));

        return () => hiddenElements.forEach((el) => observer.unobserve(el));
    }, [loading]);

    if (loading) {
        return (
            <div className="page-loader">
                <span className="spinner" />
            </div>
        );
    }

    return <Home />;
}

export default App;
