import React from "react";

export default function Card({item}) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
            <figure>
                <img
                    src={item.image}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.name}
                <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between items-center">
                    <div className="badge badge-outline">$ {item.price}</div>
                    <div className="btn border cursor-pointer hover:bg-pink-500 hover:text-white py-2 px-3">Buy Now</div>
                </div>
            </div>
        </div>
    );
}
