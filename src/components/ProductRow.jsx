function ProductRow(props) {

    const { product } = props;

    return (
        <tr className={ !product.inStock ? "red" : "0"}>
            <td>{ product.name }</td>
            <td>{ product.category }</td>
            <td>{ product.price }</td>
        </tr>
    );
}

export default ProductRow;