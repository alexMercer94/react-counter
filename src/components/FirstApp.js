import PropTypes from 'prop-types';
import React from 'react';

const FirstApp = ({ saludo, subtitulo }) => {
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
};

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
};

export default FirstApp;
