import Card from 'react-bootstrap/Card';

const Noticia = ({noticia}) => {
    return (
        <Card className='my-3'>
          <Card.Body>
            <Card.Title>{noticia.title}</Card.Title>
            <Card.Text>
                {noticia.description}
            </Card.Text>
            <a href={noticia.url} target="_blank" className='btn btn-primary'>ver mas</a>
          </Card.Body>
        </Card>
    );
};

export default Noticia;