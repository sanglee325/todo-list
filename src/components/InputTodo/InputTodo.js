import React from 'react';
import styles from './InputTodo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InputTodo = ({ value, onChange, onInsert }) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onInsert();
        }
    };

    return (
        <div className={cx('todo-input')}>
            <input onChange={ onChange } value={ value } onKeyPress={ handleKeyPress }/>
            <div className={cx('add-button')} onClick={ onInsert }>추가</div>
        </div>
    )
};

export default InputTodo;
//3개의 prop을 받음
//value: input값으로 설정
//onChange: input 배용에 변경이 있을때 사용
//onInsert: 추가 버튼을 눌렀을 때 실행하는 이벤트