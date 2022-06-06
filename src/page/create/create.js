import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UseFetchs from '../../hooks/useFerch';
import './create.scss';
export default function Create() {
    const [name, setTextName] = useState("")
    const [content, setTextContent] = useState("")
    const [Reading_Surah, settextReadingSurah] = useState("")
    const [newCategory, setNewCategory] = useState("");
    const [category, setCategorys] = useState([]);
    const categoryInput = useRef();
    const history = useHistory();
    const { postData, data, errors } = UseFetchs("http://localhost:8000/bloglar", "POST")

    const handleAdd = (e) => {
        e.preventDefault();

        const newCat = newCategory.trim();

        if (newCat && !category.includes(newCat)) {
            setCategorys(oCat => [...oCat, newCategory]);
        }
        setNewCategory("")
        categoryInput.current.focus();
    }
    useEffect(() => {
        if (data) {
            history.push("/")
        }
    }, [data])


    const formChange = (e) => {
        e.preventDefault();
        postData({ name, content, Reading_Surah: Reading_Surah + " dakika", category })
    }

    return (
        <div className="container">
            <form onSubmit={formChange}>
                <div className='form-item'>
                    <label>Yazı Başlık:</label>
                    <input name="text-name" value={name} onChange={(e) => setTextName(e.target.value)} />
                </div>
                <div className='form-item'>
                    <label>Yazı İçerik:</label>
                    <textarea name="text-content" value={content} onChange={(e) => setTextContent(e.target.value)}></textarea>
                </div>
                <div className='form-item'>
                    <label>Yazı Kategorileri:</label>
                    <input name="text-name" ref={categoryInput} value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                    <div className=''>
                        {category.map((i) => <em key={i}>{i},   </em>)}
                    </div>
                    <div className="form-item">
                        <button type='submit' onClick={handleAdd}>Kaydet</button>
                    </div>
                </div>
                <div className='form-item'>
                    <label>Okuma Süresi:</label>
                    <input type="number" name="text-reading-surah" value={Reading_Surah} onChange={(e) => settextReadingSurah(e.target.value)} />
                </div>
                <div className="form-item">
                    <button type='submit'>Kaydet</button>
                </div>
            </form>
        </div>
    );
}