import React from 'react';

import NewsItem from '../news-item/NewsItem';

import './NewsList.scss';

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {
        news.length !== 0 ? news.map(news => (
          <NewsItem {...news} key={news.id}/>
        )) :
        <p className="news-item__title">There is no news in this category/author :(</p>
      }
    </ul>
  )
}

export default NewsList;
