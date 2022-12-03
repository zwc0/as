import React from 'react';
import assets from '../misc/assets';

const AnimalDetails = ({name, image, audio}) => (
    <div>
        <h2 className="capitalize">{name}</h2>
        <div>Image: {image}</div>
        <div>Audio: {audio}</div>
    </div>
);

const Resources = () => {
    return (
        <div className='flex flex-col divide-y divide-blue-500'>
            {assets.map(([name, image, audio]) => <AnimalDetails key={name} name={name} audio={audio} image={image} />)}
        </div>
    );
}

export default Resources;