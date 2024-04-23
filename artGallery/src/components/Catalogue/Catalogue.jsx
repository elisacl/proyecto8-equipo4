import { useState } from 'react';
import CardGallery from '../CardGallery/CardGallery';
import './catalogue.css';

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

                    <div className='categories-buttons-container'>
                        <button className={`categories-buttons ${selectedCategory === 'Expresionismo' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Expresionismo')}>Expresionismo</button>
                        <button className={`categories-buttons ${selectedCategory === 'Arte abstracto' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Arte abstracto')}>Arte abstracto</button>
                        <button className={`categories-buttons ${selectedCategory === 'Realismo contemporáneo' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Realismo contemporáneo')}>Realismo contemporáneo</button>
                        <button className={`categories-buttons ${selectedCategory === 'Arte digital' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Arte digital')}>Arte digital</button>
                        <button className={`categories-buttons ${selectedCategory === 'Neo-pop' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Neo-pop')}>Neo-pop</button>
                    </div>

                  

                </section>

                <section>
                    <CardGallery selectedCategory={selectedCategory} />
                </section>

            </div>
        </div>
    );
}

export default Catalogue;
