import React, { useState, useEffect } from 'react';

import NewsSidebar from './news-sidebar/NewsSidebar';
import NewsList from './news-list/NewsList';

import './News.scss';

let initialNews = [];

const News = () => {
  const [news, setNews] = useState([]);

  const [filter, setFilter] = useState({
    author: '',
    category: 'all',
  });

  const getNews = async () => {
    const apiCall = await fetch('https://band-hero-backend.herokuapp.com/api/news');
    const news = await apiCall.json();
    await setNews(news);
    initialNews = news;
  }

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    filterNews();
  });

  const filterNews = () => {
    setNews(initialNews.filter(news => {
      if (filter.author === '' && filter.category === 'all') {
        return initialNews;
      }
      if (filter.category === 'all') {
        return filter.author === news.author;
      }
      if (filter.author === '') {
        return filter.category === news.category;
      }
      return filter.category === news.category && filter.author === news.author;
    }));
  }

  const onFilterChange = async filter => {
    await setFilter(filter);
  }

  return (
      <section className="news">
        <div className="news__wrapper">
          <main className="news-content">
            <h2 className="news__title">News</h2>
            <NewsList news={news} />
          </main>

          <NewsSidebar filter={filter} onFilterChange={onFilterChange} />
        </div>
      </section>
  )
}

export default News;
