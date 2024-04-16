import { useState } from 'react';
import CardGallery from '../CardGallery/CardGallery';

function Catalogue() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(''); 
        } else {
            setSelectedCategory(category); 
        }
    };


    return (
        <div className="catalogue-main-container">
            
            <div className="catalogue-body">
               
                <section className='filters-container'>
                  
                    <h2 id="filters-title" className="filters-title">nuestras obras</h2>

                   
                    <div className='categories-buttons-container'>
                        <button className={`categories-buttons ${selectedCategory === 'gato' ? 'selected' : ''}`} onClick={() => handleCategoryClick('gato')}>gato</button>
                        <button className={`categories-buttons ${selectedCategory === 'perro' ? 'selected' : ''}`} onClick={() => handleCategoryClick('perro')}>perro</button>
                    </div>

                   
                    <hr className="filters-lines" />

                </section>

               
                <section>
                    <CardGallery selectedCategory={selectedCategory}/>
                </section>
            </div>
        </div>
    );
}

export default Catalogue;
