import { Col, Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
    const mostrarNoticia = noticias.length === 0 ? (<p className="text-center my-3">No se encontraron resultados</p>) :
        (<Row>
            {
                noticias.map((noticia, posicion) => <Col sm={12} md={6} lg={4} key={posicion}><Noticia noticia={noticia}></Noticia></Col>)
            }
        </Row>);
    return mostrarNoticia;
};

export default ListaNoticias;