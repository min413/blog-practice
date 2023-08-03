import styles from './ThemeFilter.module.css';

const ThemeFilter = ({filter, text, onClickFilter}) => {
    return (
        <button
            className={filter === text ? styles.black : styles.gray}
            onClick={onClickFilter}
        >{text}</button>
    )
}

export default ThemeFilter;