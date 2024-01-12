import {useEffect, useState} from 'react';

type ReactLogoProps = {
    src: string;
    alt: string;
}
const ReactLogo = ({src, alt}: ReactLogoProps) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation(rotation => (rotation + 1) % 360);
        }, 1);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <img
            className="logo m-10"
            src={src}
            alt={alt}
            width={128}
            height={128}
            style={{transform: `rotate(${rotation}deg)`}}
        />
    );
};

export default ReactLogo;
