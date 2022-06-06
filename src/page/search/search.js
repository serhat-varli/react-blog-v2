import { useLocation } from 'react-router-dom';
import BlogList from '../../component/blogList/blogList';
import UseFetchs from '../../hooks/useFerch';
import './search.scss';


export default function Search() {

    const queryString = useLocation().search;
    const queryParamas = new URLSearchParams(queryString);
    const query = queryParamas.get("q");
    const url = "http://localhost:8000/bloglar?q=" + query;
    const { data, errors, loading } = UseFetchs(url)
    console.log(query)
    return (
        <div className="container">
            <p>Aranan Kelime  "{query}"</p>
            {errors && <p>{errors}</p>}
            {loading && <p>Yükleniyor</p>}
            {data && <BlogList blog={ data} />}
        </div>
    );
}