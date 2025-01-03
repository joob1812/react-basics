import React, { useState } from 'react';

export default function CreateArticle() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Article Submitted:', formData);
        // Reset the form
        setFormData({ title: '', content: '', author: '' });
    };

    return (
        <div className="min-h-screen bg-base-200 py-8 px-4 flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full md:w-4/5 lg:w-3/4 bg-white p-6 rounded-lg shadow-lg"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">Create New Article</h1>

                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-medium mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter the article title"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="content" className="block text-lg font-medium mb-2">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Enter the article content"
                        rows="6"
                        className="textarea textarea-bordered w-full"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="author" className="block text-lg font-medium mb-2">
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Enter the author's name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary">
                        Submit Article
                    </button>
                </div>
            </form>
        </div>
    );
}
