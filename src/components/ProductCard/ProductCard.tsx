import { FC } from 'react'
import { Card } from 'react-bootstrap'
import './ProductCard.css'

interface Props {
    pk: number,
    phone: string,
    full_name: string,
    img: string,
}

// "data:image/jpeg;base64,"+
const ProductCard: FC<Props> = ({ pk, phone, full_name, img }) => (
    <a href={"receivers/" + pk.toString()}><Card className="card">
        <div className="cardImageWrap"><Card.Img className="cardImage" src={`${img}`} /></div>
        <div className="cardTitleWrap"><Card.Title className="cardTitle" style={{color:"rgba(0,0,0)"}}>{full_name}</Card.Title></div>
        <div className="cardTitleWrap"><Card.Title className="cardTitle" style={{color:"rgba(0,0,0)"}}>{phone}</Card.Title></div>
        <h4 className="cardStatusGreen"><Card.Title className="cardTitle">О получателе</Card.Title></h4>
    </Card></a>
)

export default ProductCard