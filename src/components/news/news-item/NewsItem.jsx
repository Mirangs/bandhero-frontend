import React from 'react';

import './NewsItem.scss';

const NewsItem = ({ title, content, date, author, category }) => {
  return (
    <li className="news-item">
      <h3 className="news-item__title">{title}</h3>
      <p className="news-item__content">{content}</p>
      <div className="news-item__meta">
        <small className="news-item__date">Publication date: {date.substring(0, 10)}</small>
        <span className="news-item__author">Author: {author}</span>
      </div>
      {/* <span className="news-item__category">Category: {category}</span> */}
    </li>
  )
}

export default NewsItem;
