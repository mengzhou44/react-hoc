import React from 'react';

export default function addSpinner(loading, jsx) {
    if (loading) {
        return <div> Loading ... </div>;
    }
    return jsx;
};
