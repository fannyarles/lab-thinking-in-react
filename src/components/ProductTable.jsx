import ProductRow from "./ProductRow";

function ProductTable(props) {

    const { data } = props;
    const categories = [];
    [...data].forEach(product => { if ( !categories.includes(product.category) ) categories.push(product.category) ; });

    return (
        <div id="products-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                { categories.map(cat => {
                    return  <tbody key={ cat }>
                                <tr className="table-cat"><td key={ cat } colSpan="3"><b>{ cat }</b></td></tr>
                                { data.map(product => { if (product.category === cat ) { return <ProductRow key={ product.id } product={ product } /> } }) }
                            </tbody>
                    })
                }
            </table>
        </div>
    );

}

export default ProductTable;