import { useParams } from 'react-router-dom';
import UseFetchs from '../../hooks/useFerch';
import './blog.scss';

export default function Blog() {
    const { id } = useParams();
    const url = 'http://localhost:8000/bloglar/' + id;
    const { data, errors, loading } = UseFetchs(url)
    return (
        <div className="container">
            <div className='content'>
                {errors && <p>{errors}</p>}
                {loading && <p>Yükleniyor</p>}
                <h1>{data && data.name}</h1>
                <p>{data && data.Reading_Surah}</p>
                <ul>{data && data.category.map(category => <li key={category}>{category}</li>)} </ul>
                <p>{data && data.content}</p>
            </div>
        </div >
    );
}