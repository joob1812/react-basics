import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/articles')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched articles:', data); // <-- Vérifiez ici
                setArticles(data);
            })
            .catch((err) => setError(err.message));
    }, []);


    const handleDelete = (id) => {
        fetch(`http://localhost:3000/articles/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setArticles(articles.filter((article) => article.id !== id));
            })
            .catch((err) => setError(err.message));
    };

    if (error) {
        return <div className="text-red-500 text-center">Error: {error}</div>;
    }

    if (articles.length === 0) {
        return <div className="text-center">No articles available.</div>;
    }

    return (
        <div className="p-8 bg-base-200 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Articles</h1>
            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    {...article}
                    onDelete={() => handleDelete(article.id)}
                />
            ))}
        </div>
    );
}
