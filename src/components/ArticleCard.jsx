import React, { useState } from 'react';

export default function ArticleCard({ id, title, content, author, createdAt, onDelete }) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="card bg-base-100 shadow-xl w-full md:w-4/5 lg:w-3/4 mx-auto my-4 relative">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className="text-gray-700 mb-4">{content}</p>
                <div className="text-gray-500 text-sm mb-4">
                    <p>By: {author}</p>
                    <p>{new Date(createdAt).toLocaleDateString()}</p>
                </div>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-error text-white"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Section "likes" en bas à gauche */}
            <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <span className="text-gray-700 font-medium">{likes}</span>
                <button
                    className="text-red-500 text-2xl focus:outline-none"
                    onClick={handleLike}
                    aria-label="Like"
                >
                    ❤️
                </button>
            </div>
        </div>
    );
}
