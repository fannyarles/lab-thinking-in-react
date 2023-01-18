import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar ';

function ProductsPage() {

    const [ initialData, setInitialData ] = useState(jsonData);
    const [ displayedData, setDisplayedData ] = useState(jsonData);

    const filterByName = (eTarget) => {
        const filteredData = [...initialData].filter(product => product.name.toLowerCase().startsWith(eTarget.value.toLowerCase()));
        setDisplayedData(filteredData);
    }

    const filterByStock = (e) => {
        let filteredData;
        if ( e.target.checked ) {
            filteredData = [...displayedData].filter(product => product.inStock === true);
            setDisplayedData(filteredData);
        } else {
            filteredData = initialData;
            filteredData = filterByName(document.getElementById('searchbar'));
        }
    }

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar filterByName={ filterByName } filterByStock={ filterByStock } />
            <ProductTable data={ displayedData } />
        </div>
    );

}

export default ProductsPage;