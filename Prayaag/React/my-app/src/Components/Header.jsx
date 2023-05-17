import React from 'react';

function Header({tagline}) {
  return (
    <header className = "top-header">
        <h1 className = "top-title">
            <span className = "title">Catch</span>
            <span className = "ofthe"> of the </span>
            <span className = "title">Day</span>
        </h1>
        <div className = "taglineContainer">
            <h3 className = "tagline">{tagline}</h3>
        </div>
    </header>
  );
}

Header.defaultProps = {
  tagline : "Fresh Daily",

}

export default Header