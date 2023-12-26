import { FC } from 'react'
import { useState } from 'react';
import './Filter.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface FilterData {
    title: string
}

export const Filter: FC<FilterData> = ({title}) => {
    const [inputTitle, setInputTitle] = useState(title);
    
    return (
        <Container id="filter">
            <Row><h3 className="filter-title">Поиск</h3></Row>
            <form action="" method="get" id="filter-form">

                <Container style={{ transform: "translateY(-40%)", paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <Row><h4 className="filter-text">ФИО получателя</h4></Row>
                    <Row style={{ transform: "translateY(-20%)",paddingRight: "20px" }}>
                        <input className="filter-input" name="title" type="text" size={30} placeholder="Введите ФИО" value={inputTitle.toLowerCase()} onChange={(e) => setInputTitle(e.target.value)} />
                    </Row>
                </Container>

                <Row style={{ transform: "translateY(-20%)",paddingRight: "20px" }}><input className="filter-submit" type="submit" value="применить" /></Row>
            </form>
        </Container>
    )
}