import React from 'react';
import { debounce } from 'lodash';

import './NewsSidebar.scss';

const NewsSidebar = ({ filter, onFilterChange }) => {
  const onChange = debounce((target) => {
    onFilterChange({
      ...filter,
      [target.name]: target.value,
    });
  }, 500);

  const onSubmit = evt => {
    evt.preventDefault();
  }

  return (
    <aside className="news-sidebar">
      <form onChange={evt => onChange(evt.target)} onSubmit={onSubmit}>
        <label htmlFor="author" className="news-sidebar__title">Author</label>
        <input type="text" id="author" name="author"/>

        <h3 className="news-sidebar__title">Category</h3>
        <ul className="news-sidebar__list">
          <li className="news-sidebar__item">
            <input type="radio" name="category" value="all" id="category-all"/>
            <label htmlFor="category-all">all</label>
          </li>
          <li className="news-sidebar__item">
            <input type="radio" name="category" value="technical" id="category-technical"/>
            <label htmlFor="category-technical">technical</label>
          </li>
          <li className="news-sidebar__item">
            <input type="radio" name="category" value="offer" id="category-offer"/>
            <label htmlFor="category-offer">offer</label>
            </li>
          <li className="news-sidebar__item">
            <input type="radio" name="category" value="announce" id="category-announce"/>
            <label htmlFor="category-announce">announce</label>
            </li>
          <li className="news-sidebar__item">
            <input type="radio" name="category" value="other" id="category-other"/>
            <label htmlFor="category-other">other</label>
            </li>
        </ul>
      </form>
    </aside>
  )
}

export default NewsSidebar;
