import React, { useEffect, useState } from 'react';
import axios from 'axios';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/news');
                setNews(response.data);
            } catch (error) {
                alert('Error al cargar las novedades');
            }
        };
        fetchNews();
    }, []);

    return (
        <div>
            <h2>Novedades</h2>
            <ul>
                {news.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;
