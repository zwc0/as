import React from 'react';
import assets from '../misc/assets';

const AnimalCard = ({image, audio}) => {
    const playAudio = () => new Audio(audio).play();
    return (<button onClick={playAudio}>
        <img src={image} />
    </button>);
}

const Home = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4'>
            {assets.map(([name, image, audio]) => <AnimalCard key={name} image={image} audio={audio} />)}
        </div>
    );
}

export default Home;