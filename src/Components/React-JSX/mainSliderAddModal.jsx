import React from 'react'

function MainSliderAddModal({ open, children }) {
    if (!open) return null
    return (
        <div>
            {children}
        </div>
    )
}

export default MainSliderAddModal