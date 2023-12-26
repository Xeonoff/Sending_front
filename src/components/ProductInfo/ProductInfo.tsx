import { FC } from 'react'
import './ProductInfo.css'

export interface Param {
    key: string,
    value: string
}

interface Props {
    pk: number,
    full_name: string,
    parameters: Param[],
    img: string
}

// "data:image/jpeg;base64,"+
const ProductInfo: FC<Props> = ({pk, full_name, parameters, img}) => (
    <div className="product">
        <div className="product-info" key={pk.toString()}>
            <h4 className="product-title">{full_name}</h4>
            <div className="product-image-wrap">
                <img src={img} alt="картинка" className="product-image" />
            </div>
            <input type="radio" name="radio" id="product-params" defaultChecked />
            <input type="radio" name="radio" id="product-reviews" />
            <div className="product-bar">
                <label htmlFor="product-params" className="product-params-text">Информация о получателе</label>
            </div>
            <table className="product-params">
                {parameters && parameters.map((param) => (
                    param.value && <tr className="product-param">
                    <td className="property-key">
                        <h4 className="property-key-text">{param.key}</h4>
                        <h4 className="property-key-dots"></h4>
                    </td>
                    <td className="property-value">{param.value}</td>
                </tr>
                ))}
            </table>
        </div>
    </div>
)

export default ProductInfo