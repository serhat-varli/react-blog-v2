import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './search.scss'

export default function SearchBar() {
    const [search, setSeacrh] = useState('');
    const history = useHistory();

    const handleSumbit = (e) => {
        e.preventDefault();
        history.push(`/search?q=${search}`)
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleSumbit}>
                <div className="form-item">
                    <input placeholder='Ara...'  name="q" type="text" value={search} onChange={(e) => setSeacrh(e.target.value)} />
                </div>
            </form>
        </div>
    );
}