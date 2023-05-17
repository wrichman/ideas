import React from 'react'

function NotFound({ error }) {
  
    return (
        <div>
            <h1>Not Found: Error {error}</h1>
            <span className = "not-found">The page you're looking for does not exist.</span>
        </div>
    );
}

export default NotFound;