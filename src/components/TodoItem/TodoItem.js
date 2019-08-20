import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
  render() {
    const {done, children, onToggle, onRemove} = this.props;

    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
        <div className={cx('text', {done})}>{children}</div>
        <div className={cx('delete')} onClick={(e) => {
          onRemove();
          e.stopPropagation();
        }}>[지우기]</div>
      </div>
    );
  }
}

export default TodoItem;
//done : 해당 일정이 완료했는지 체크
//children : 자식요소 (일정 내용)
//onToggle : 일정 완료/미완료 토글
//onRemove : 해당 일정 삭제