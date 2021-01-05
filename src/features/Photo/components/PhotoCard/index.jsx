import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardImg, Button, CardTitle,ButtonGroup } from 'reactstrap';

PhotoCard.propTypes = {
    onHandleEdit: PropTypes.func,
    onHandleRemove: PropTypes.func
};
PhotoCard.defaultProps = {
    onHandleEdit: null,
    onHandleRemove: null
}

function PhotoCard(props) {
    const { photo, onHandleEdit,onHandleRemove } = props;

    const handleCardEdit = (photo) => {
        onHandleEdit(photo);
    }

    const handleCardRemove = (photo) => {
        onHandleRemove(photo);
    }

    return (
            <Card>
                <CardImg top width="100%" src={photo.Src} alt={photo.Title} />
                <CardBody>
                    <CardTitle tag="h5">{photo.Title}</CardTitle>
                </CardBody>
                <ButtonGroup>
                    <Button color="primary" size="sm" onClick={() => handleCardEdit(photo)}><i className="fal fa-pen"></i></Button>
                    <Button color="danger" size="sm" onClick={() => handleCardRemove(photo)}><i className="fal fa-trash-alt"></i></Button>
                </ButtonGroup>
            </Card>
    );
}

export default PhotoCard;