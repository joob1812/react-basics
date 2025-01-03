import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: 'Article 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'John Doe',
            createdAt: new Date(),
        },
        {
            id: 2,
            title: 'Article 2',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
            author: 'Jane Smith',
            createdAt: new Date(),
        },
    ]);

    const handleDelete = (id) => {
        setArticles(articles.filter((article) => article.id !== id));
    };

    return (
        <div className="p-8 bg-base-200 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Articles</h1>
            <div className="flex flex-wrap">
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        title={article.title}
                        content={article.content}
                        author={article.author}
                        createdAt={article.createdAt}
                        onDelete={() => handleDelete(article.id)}
                    />
                ))}
            </div>
        </div>
    );
}
