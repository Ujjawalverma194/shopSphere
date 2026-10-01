import React from 'react'
import { useState } from 'react';
const categories = [
    ["All products", 194],
    ["Beauty", 5],
    ["Fragrances", 5],
    ["Furniture", 5],
    ["Laptops", 5],
    ["Mens watches", 6],
    ["Smartphones", 16],
    ["Tablets", 3],
];
const Filter = () => {

    const [selectedCategory, setSelectedCategory] =
        useState("Smartphones");

    const [rating, setRating] = useState("4");

    return (
        <div className="filter-sidebar">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 fw-bold text-dark">Filters</h6>

                <button className="clear-btn">
                    Clear all
                </button>
            </div>


            <div className="filter-title">
                CATEGORY
            </div>

            <div>
                {categories.map(([name, count]) => (
                    <button
                        key={name}
                        onClick={() => setSelectedCategory(name)}
                        className={`category-item ${selectedCategory === name ? "active" : ""
                            }`}
                    >
                        <span>{name}</span>
                        <span className="count">{count}</span>
                    </button>
                ))}
            </div>


            <div className="mt-4">
                <div className="filter-title">
                    PRICE (₹)
                </div>

                <div className="d-flex align-items-center gap-2">
                    <input
                        type="text"
                        className="form-control price-input"
                        defaultValue="10,000"
                    />

                    <span className="text-secondary">−</span>

                    <input
                        type="text"
                        className="form-control price-input"
                        defaultValue="1,00,000"
                    />
                </div>
            </div>


            <div className="mt-4">
                <div className="filter-title">
                    RATING
                </div>

                <div className="rating-list">
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="4"
                            checked={rating === "4"}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        <span>4★ & above</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="3"
                            checked={rating === "3"}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        <span>3★ & above</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="0"
                            checked={rating === "0"}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        <span>Any rating</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Filter



