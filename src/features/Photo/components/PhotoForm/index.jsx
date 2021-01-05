import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
    initialValues: PropTypes.object,
    isAddPhoto: PropTypes.bool
};
PhotoForm.defaultProps = {
    onSubmit: null,
    initialValues: {},
    isAddPhoto: ""
}

function PhotoForm(props) {
    const { onSubmit, initialValues,isAddPhoto } = props;

    var images = [
        'https://picsum.photos/id/237/500/400',
        'https://picsum.photos/id/238/500/400',
        'https://picsum.photos/id/239/500/400',
        'https://picsum.photos/id/240/500/400',
        'https://picsum.photos/id/241/500/400',
        'https://picsum.photos/id/242/500/400',
        'https://picsum.photos/id/243/500/400',
        'https://picsum.photos/id/244/500/400',
        'https://picsum.photos/id/245/500/400',
        'https://picsum.photos/id/246/500/400'
    ];

    const [name, setName] = useState(initialValues.Title);
    const [imgRandom, setImgRandom] = useState(initialValues.Src);
    const handleClickRandom = () => {
        var randomImg = images[Math.floor(Math.random() * images.length)];
        setImgRandom(randomImg);
    }

    const guidGenerator = () => {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const values = {
            "id": isAddPhoto ? guidGenerator() : initialValues.id,
            "Title": name,
            "Src": imgRandom
        }
        onSubmit(values);
    }

    const handleChangeInput = (e) => {
        setName(e.target.value);
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <FormGroup>
                <Label for="name">Tên ảnh</Label>
                <Input
                    type="text"
                    value={name}
                    name="name"
                    id="name"
                    onChange={handleChangeInput}
                    placeholder="Eg: My Photo ..." />
            </FormGroup>
            <FormGroup>
                <Label for="image">Chọn ảnh</Label>
                <div><img width="150px" src={imgRandom} alt="" /></div>
                <Button onClick={handleClickRandom} outline color="primary">Random Image</Button>
            </FormGroup>
            {
                isAddPhoto ? (<Button color="success">ADD PHOTO</Button>) : (<Button color="success">SAVE</Button>)
            }
            
        </Form>
    );
}

export default PhotoForm;