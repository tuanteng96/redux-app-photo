import React from 'react';
import PropTypes from 'prop-types';
import PhotoForm from '../../components/PhotoForm';
import { Col, Container, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from '../../photoSlice';
import { useHistory, useParams } from 'react-router-dom';

AddEditPage.propTypes = {
    
};

function AddEditPage(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddPhoto = !photoId;
    const editPhoto = useSelector(state => state.photos.find(photo => photo.id === photoId));
    
    const initialValues = isAddPhoto ? {
        "Title": "",
        "Src": "https://picsum.photos/id/237/500/400"
    } : {
            "id": editPhoto.id,
            "Title": editPhoto.Title,
            "Src": editPhoto.Src,
        }

    const handleSubmit = (values) => {
        if (isAddPhoto) {
            const action = addPhoto(values);
            dispatch(action);
            history.push("/photos");
        }
        else {
            const action = updatePhoto(values);
            dispatch(action);
            history.push("/photos");
        }
    }

    return (
        <Container>
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <PhotoForm
                        isAddPhoto={isAddPhoto}
                        initialValues={initialValues}
                        onSubmit={handleSubmit} />
                </Col>
            </Row>
        </Container>
    );
}

export default AddEditPage;