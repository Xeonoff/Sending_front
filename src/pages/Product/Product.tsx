import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product, getProduct } from '../../modules/getDataFromAPI'
import ProductInfo, {Param} from '../../components/ProductInfo/ProductInfo'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import "./Product.css"
import { Container, Row } from 'react-bootstrap';

const ProductPage: FC = () => {
    const { id } = useParams();

    const [product, setProduct] = useState<Product>();
    const [parameters, setParameters] = useState<Param[]>([]);

    const getParams = (source: Product) => {
        const params: Param[] = []
        source.bdate && params.push({key: "Дата рождения", value: source.bdate})
        source.email && params.push({key: "Email", value: source.email})
        source.phone &&  params.push({key: "Телефон", value: source.phone})
        return params
    }

    useEffect(() => {
        id && getProduct(id)
            .then((response) => {
                setProduct(response);
                setParameters(getParams(response));
            })
            .then(() => {
                console.log(product);
                console.log(parameters);
            })
    }, [id]);

    return (
        <Container>
            <Row>
                {id && product && <Breadcrumbs pages={[ { link: `/products/${id}/`, title: `${product.full_name}` } ]} />}
            </Row>
            <Row>
                {product && parameters && id && <ProductInfo pk={parseInt(id, 10)} full_name={product.full_name} parameters={parameters} img={product.img} />}
            </Row>
        </Container>
    )
}

export default ProductPage;