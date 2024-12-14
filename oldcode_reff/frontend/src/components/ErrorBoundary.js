import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error (optional)
        console.error("Error Boundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI
            return (
                <div style={{ color: "red", padding: "1rem" }}>
                    <h1>Something went wrong.</h1>
                    <p>{this.state.error?.message || "Unknown error occurred."}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
