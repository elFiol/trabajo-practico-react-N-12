import { Button, Container, Form } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import ListaNoticias from "./ListaNoticias";
import { useState } from "react";

const FormNoticia = () => {
    const [noticias, setNoticias] = useState([])
    const [mostrarSpinner, setMostrarSpinner] = useState(false)
    const [categoriaInput, setCategoriaInput] = useState("")

    const API_KEY = "&apiKey=e2d1b266844542de83b64e2878769d6c"
    const API = "https://newsapi.org/v2/top-headlines?from=2024-02-12&sortBy=popularity&country=ar&category="

    const hacerPeticiion = async () => {
        setMostrarSpinner(true)
        const peticion = await fetch(API + categoriaInput + API_KEY)
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
            <div className="d-lg-flex w-100 border">
                <p className="mx-3 my-4">Buscar por categoria:</p>
                <Form className="w-100 my-4 px-3" onSubmit={handlerSubmit}>
                    <Form.Group>
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
                    <Button className="mt-4" type="submit">Buscar</Button>
                </Form>
            </div>
            {mostrarComponente}
        </Container>
    );
};

export default FormNoticia;