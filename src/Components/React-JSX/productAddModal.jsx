import React from 'react'

function ProductAddModal({ open, children }) {
    if (!open) return null
    return (
        <div>
            { children }
        </div>
    )
}

export default ProductAddModal