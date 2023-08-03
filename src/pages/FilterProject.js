import Layout from "../components/shared/Layout";
import styles from './FilterProject.module.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import ThemeFilter from '../components/filter/ThemeFilter';
import FilterCard from '../components/filter/FilterCard';

const target = ['전체', 'false', 'true'];


const FilterProject = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/todos';
    const [filter, setFilter] = useState('전체');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(API_URL)
                setTodos(response.data);
            } catch(e){
                console.log(e);
            }
        }

        fetchData();
    },[])

    

    function mapFunc(data, index){
        return (
            <ThemeFilter 
                filter={filter}
                text={data}
                onClickFilter={function(){
                    setFilter(data);
                }}
                key={`theme-filter-${index}`}
            />
        )
    }

    function filterFunc(data){
        if(filter === '전체' || filter === data.completed.toString()) return true;
        return false;
    }

    return (
        <Layout activeMenu="filterproject">
            <div className={styles.header}>{target.map(mapFunc)}</div> 
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid}>
                        {todos.filter(filterFunc).map(FilterCard)}
                    </div>
                </div>
            </div>
            
        </Layout>
    
    )
}
export default FilterProject;

/*
.filter(filterFunc).map(FilterCard)
*/

/*
<div className={styles.header}>{target.map(mapFunc)}</div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid}>{youtubeData['data'].filter(filterFunc).map(HomeCard)}</div>
                </div>
            </div>
*/

