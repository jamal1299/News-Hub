import React from 'react'
import CategoryCard from './CategoryCard'
const Categories = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <CategoryCard filter="Business" />
                        <CategoryCard filter="Sports" />
                        <CategoryCard filter="Entertainment" />
                        <CategoryCard filter="Technology" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Categories