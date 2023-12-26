import defaultImage from '../assets/default.jpg';

interface Product {
    id: number,
    full_name : string,
    img : string,
    status : '1' | '0',
    bdate : string,
    sex : 'm' | 'f',
    email : string,
    available_mem : string,
    phone : string,
    last_modified : string
}

export const defaultProduct = (id: number): Product => {
    return {
        id: id,
        full_name : "Неопознанный гуль",
        img : defaultImage,
        status : '1',
        bdate : "2007-12-12",
        sex : 'm',
        email : "undefinedEmail",
        available_mem : "1024,0",
        phone :"+7(777)777-77-77",
        last_modified : "none"
    }
}