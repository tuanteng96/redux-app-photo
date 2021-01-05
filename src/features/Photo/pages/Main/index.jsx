import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import PhotoCard from '../../components/PhotoCard';
import { removePhoto } from '../../photoSlice';
import { useHistory } from 'react-router-dom';
import ProductApi from '../../../../api/productApi';


MainPage.propTypes = {
    
};

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    const dispath = useDispatch();
    const history = useHistory();

    const onHandleEdit = (photo) => {
        history.push(`/photos/${photo.id}`);
    }
    const onHandleRemove = (photo) => {
        const action = removePhoto(photo);
        dispath(action);
    }

    //Get Api
    useEffect(() => {
        const fetchProductCate = async () => {
            try {
                const response = await ProductApi.getCateToID("794");
                console.log(response);
            } catch(er) {

            }
        }
        fetchProductCate();
    })

    return (
        <Container fluid={true}>
            <Row>
                {
                    photos.map((photo, index) => (
                        <Col md="2" key={index}>
                            <PhotoCard
                                onHandleEdit={onHandleEdit}
                                onHandleRemove={onHandleRemove}
                                photo={photo} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default MainPage;