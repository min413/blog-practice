import Layout from "../components/shared/Layout";
import styles from './Home.module.css';
import HomeFilter from "../components/filter/HomeFilter";
import { useState } from "react";

const target = ['전체', 'Music', 'Entertainment', 'Comedy'];

const Home = () => {
    const [filter, setFilter] = useState('전체');

    function mapFunc(data, index){
        return (
            <HomeFilter 
                filter={filter}
                text={data}
                onClickFilter={function(){
                    setFilter(data);
                }}
                key={`home-filter-${index}`}
            />
        )
    }

    function filterFunc(data){
        if(filter === '전체' || filter === data.category) return true;
        return false;
    }

    return (
        <Layout activeMenu="home">
            <div className={styles.container}>
                Home 페이지 입니다.
            </div>
        </Layout>
    )
}

export default Home;