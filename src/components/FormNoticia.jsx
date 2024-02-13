import { Button, Container, Form } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import ListaNoticias from "./ListaNoticias";
import { useState } from "react";

const FormNoticia = () => {
    const [noticias, setNoticias] = useState([])
    const [mostrarSpinner, setMostrarSpinner] = useState(false)
    const [categoriaInput, setCategoriaInput] = useState("")
    const [pais, setPaisInput] = useState("")

    const API_KEY = "&apiKey=e2d1b266844542de83b64e2878769d6c"
    const API = "https://newsapi.org/v2/top-headlines?from=2024-02-12&sortBy=popularity&category="

    const hacerPeticiion = async () => {
        setMostrarSpinner(true)
        const lugarParam = `&country=${pais}`
        const peticion = await fetch(API + categoriaInput + API_KEY + lugarParam)
        const datos = await peticion.json()
        setNoticias(datos.articles)
        setMostrarSpinner(false)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        hacerPeticiion()
    }

    const mostrarComponente = mostrarSpinner ? (
        <div className="text-center my-3"><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div>) : (<ListaNoticias noticias={noticias}></ListaNoticias>)
    return (
        <Container className="my-4">
            <div className="w-100 border">
                <Form className="w-100 my-4 px-3" onSubmit={handlerSubmit}>
                    <Form.Group className="d-lg-flex my-4">
                        <p className="mx-3">Buscar por categoria:</p>
                        <Form.Select onChange={(e) => { setCategoriaInput(e.target.value) }}>
                            <option value="business">Negocios</option>
                            <option value="entertainment">Entretenimiento</option>
                            <option value="general">General</option>
                            <option value="health">Salud</option>
                            <option value="science">Ciencia</option>
                            <option value="sports">Deportes</option>
                            <option value="technology">Tecnología</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="d-lg-flex mt-4">
                        <p className="mx-3">Buscar por categoria:</p>
                        <Form.Select onChange={(e) => setPaisInput(e.target.value)}>
                            <option value="ae">Emiratos Árabes Unidos</option>
                            <option value="ar">Argentina</option>
                            <option value="at">Austria</option>
                            <option value="au">Australia</option>
                            <option value="be">Bélgica</option>
                            <option value="bg">Bulgaria</option>
                            <option value="br">Brasil</option>
                            <option value="ca">Canadá</option>
                            <option value="ch">Suiza</option>
                            <option value="cn">China</option>
                            <option value="co">Colombia</option>
                            <option value="cu">Cuba</option>
                            <option value="cz">República Checa</option>
                            <option value="de">Alemania</option>
                            <option value="eg">Egipto</option>
                            <option value="es">España</option>
                            <option value="fr">Francia</option>
                            <option value="gb">Reino Unido</option>
                            <option value="gr">Grecia</option>
                            <option value="hk">Hong Kong</option>
                            <option value="hu">Hungría</option>
                            <option value="id">Indonesia</option>
                            <option value="ie">Irlanda</option>
                            <option value="il">Israel</option>
                            <option value="in">India</option>
                            <option value="it">Italia</option>
                            <option value="jp">Japón</option>
                            <option value="kr">Corea del Sur</option>
                            <option value="lt">Lituania</option>
                            <option value="lv">Letonia</option>
                            <option value="ma">Marruecos</option>
                            <option value="mx">México</option>
                            <option value="my">Malasia</option>
                            <option value="ng">Nigeria</option>
                            <option value="nl">Países Bajos</option>
                            <option value="no">Noruega</option>
                            <option value="nz">Nueva Zelanda</option>
                            <option value="ph">Filipinas</option>
                            <option value="pl">Polonia</option>
                            <option value="pt">Portugal</option>
                            <option value="ro">Rumania</option>
                            <option value="rs">Serbia</option>
                            <option value="ru">Rusia</option>
                            <option value="sa">Arabia Saudita</option>
                            <option value="se">Suecia</option>
                            <option value="sg">Singapur</option>
                            <option value="si">Eslovenia</option>
                            <option value="sk">Eslovaquia</option>
                            <option value="th">Tailandia</option>
                            <option value="tr">Turquía</option>
                            <option value="tw">Taiwán</option>
                            <option value="ua">Ucrania</option>
                            <option value="us">Estados Unidos</option>
                            <option value="ve">Venezuela</option>
                            <option value="za">Sudáfrica</option>
                        </Form.Select>
                    </Form.Group>
                    <Button className="mt-4" type="submit">Buscar</Button>
                </Form>
            </div>
            {mostrarComponente}
        </Container>
    );
};

export default FormNoticia;