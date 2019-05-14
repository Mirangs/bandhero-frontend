import React, { useState, useEffect } from 'react';

import NewsSidebar from './news-sidebar/NewsSidebar';
import NewsList from './news-list/NewsList';

import './News.scss';

let initialNews = [];

const News = () => {
  const [news, setNews] = useState([
    // {
    //   "id": 1,
    //   "title": "We are started!",
    //   "content": "Today is a special day. Now we are proud to present our new project called Band Hero! Now you can play music with musiciants from anywhere in the world!",
    //   "date": "2019-04-30T21:00:00.000Z",
    //   "author": "Admin",
    //   "category": "technical"
    // },
    // {
    //   "id": 11,
    //   "title": "First maintenance",
    //   "content": "Sorry, but now we are currently unavailable due to regular maintenance. Sorry about that, we are trying to finish soon.",
    //   "date": "2019-04-30T21:00:00.000Z",
    //   "author": "Admin",
    //   "category": "technical"
    // }
  ]);
  const [filter, setFilter] = useState({
    author: '',
    category: 'all',
  });

  const getNews = async () => {
    const api_call = await fetch('/api/news');
    const news = await api_call.json();
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
