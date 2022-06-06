import { Link } from 'react-router-dom'
import './blogList.scss'

export default function BlogList({ blog: data }) {
    if (data.length === 0) {
        return ( <div className='error'>Aranan kelime iat içerik bulunamadı</div>)
    }
    return (
        <div className='home-list'>
            <div className='inner'>
                {data && data.map(blog => (
                    <div className='item' key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>
                            <h2 >{blog.name.substring(0, 35)}</h2>
                            <p>{blog.content.substring(0, 100)}</p>
                            <p>{blog.Reading_Surah}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    )
}