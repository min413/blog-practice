# React로 간단한 블로그 느낌내기
---
  
## 🖨️ 코드 베이스 사이트
[codemate-WEB-메이트-React-편](https://codemate.kr/project/WEB-%EB%A9%94%EC%9D%B4%ED%8A%B8-React-%ED%8E%B8/1-1.-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%9E%80)

![image](https://github.com/min413/blog-practice/assets/49319275/7d55f90d-0fce-4261-b57d-e413e689b9e0)

---  

## 🖥️ 개발 계획
리액트 공부하던 사이트에서 기존에 있던 유튜브 클론 코드 파일을 가져와서 조금씩 고쳐서 사용해볼 예정이다.

이 코드에 관심을 가지게 된 이유는 데이터를 **필터링** 하는 방법을 찾아보고 있던 도중  
위 사이트와 같이 유튜브 카테고리별로 필터링하는 부분에 끌려서 바로 따라쳐보고 다른 API로 적용시켜봤다.

**<ul>그리고 다른 자잘한 프로젝트들도 Menu 칸에 추가해가면서 모아서 보는 사이트로 만들어보는 것을 목표로 하고 있다.</ul>**

---

## 1. Filtering

``` javascript
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
```
먼저 jsonplaceholder 에서 제공하는 API 중 todos 데이터를 사용할 것이다.  
이 데이터에서는 completed라는 속성이 true와 false로 나눠지기 때문에 필터링 작업에 적합하다고 판단했기 때문이다.  

먼저 useState로 filter를 '전체'로,  todos를 빈 문자열로 각각 선언한다.  
그리고 useEffect에 axios로 API를 비동기 방식으로 호출해온다.  
그리고 이 가져온 데이터를 setTodos로 todos 배열에 넣는다.  


```javascript
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
```
mapFunc는 target.map에서 필터링 주제들이 버튼 형식으로 나열되는 함수다.  
filterFunc는 todos.filter(filterFunc)에서 어떤 카테고리인지 걸러주는 역할을 한다.  
  
위 코드를 기준으로는 전체, true, false 이렇게 나뉘어져 있다.  
처음에는 전체로 초기화되어있고, 다른 주제 버튼을 누르면 filter === data.completed.toString() 이렇게 하나씩 체크한다.  
*(여기서 true와 false는 boolean 형식이라 toString()으로 변환해서 적용했다. 잠깐 막혔다가 자료형 형식을 맞춰서 해결했다.)*  

![image](https://github.com/min413/blog-practice/assets/49319275/ebc3d5f2-aa8f-4a66-b682-59aa6d90fd36)

---

