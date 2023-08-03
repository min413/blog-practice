import styles from './FilterCard.module.css';

const FilterCard = (data, index) => {
    return (
        <div className={styles.container}>
            
            <div>
                {data.id}
            </div>
            <div>
                {data.title}
            </div>
            
        </div>

    )
}

export default FilterCard;