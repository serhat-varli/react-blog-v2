import BlogList from '../../component/blogList/blogList';
import useFetchs from '../../hooks/useFerch';
import './home.scss';
export default function Home() {
    const { data, errors, loading } = useFetchs('http://localhost:8000/bloglar')
    return (
        <div className="container">
            {errors && <p>{errors}</p>}
            {loading && <p>Yükleniyor</p>}
            {data && <BlogList blog={ data} />}
        </div>
    );
}