import React from 'react'
import './Alert.css'

function Alert({ type, content }) {

    switch (type) {
        case "success":
            return <div className="alert-position"><p class="alert alert-success"><i class="fas fa-check mr-05"></i>{content}</p></div>
        case "danger":
            return <div className="alert-position"><p class="alert alert-danger"><i class="fas fa-exclamation-triangle mr-05"></i>{content}</p></div>
        case "warning":
            return <div className="alert-position"><p class="alert alert-warning"><i class="fas fa-exclamation mr-05"></i>{content}</p></div>
        case "information":
            return <div className="alert-position"><p class="alert alert-information">{content}</p></div>
        default:
            return null;
    }
}

export { Alert }