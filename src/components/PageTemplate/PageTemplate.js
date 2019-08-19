import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
  return(
    <div className={cx('page-template')}>
      <h1>To-do List</h1>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  )
};
export default PageTemplate;

//To-Do 리스트의 가장 큰 기본틀을 구성하며, 자식요소들을 로드한다.