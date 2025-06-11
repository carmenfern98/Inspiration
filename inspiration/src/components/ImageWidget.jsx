import { useState, useEffect } from "react"
import { getImage } from "../../utils/imgapi"

export const ImageWidget = ({children}) => {
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        setLoading(true);
        setError(null);

        getImage()
        .then(data=>{
            console.log('Image data', data);
            setImage(data)
            setLoading(false)
        })
    }, []);

    const handleNext = () => {
        setIndex((prev)=>(prev + 1) % image.length)
    };

    const handlePrev = () => {
        setIndex((prev => (prev-1 + image.length) % image.length))
    };

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;
    if(!image.length) return<p>No images loaded</p>;

    return(
        <>
        <div
        style={{
            backgroundImage:`url(${image[index].imageurl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            position:'fixed',
            top:0,
            left:0,
            zIndex:-1,
            pointerEvents: 'none',
            filter:"blur(6px)"
        }}/>
        <div>{children}</div>
        <div style={{position: "relative", zIndex:1, minHeight:"100vh"}}>
            <button 
                onClick={handlePrev}
                style = {{
                    position: 'fixed',
                    top: '50%',
                    left: '2%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    fontSize: '2rem',
                    padding: '1rem',
                    cursor:'pointer',
                    color: '#FFFFFF',
                    backgroundColor: 'transparent'
            }}>←</button>
            <button 
                onClick={handleNext}
                style={{
                   position: 'fixed',
                    top: '50%',
                    right: '2%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    fontSize: '2rem',
                    padding: '1rem',
                    cursor:'pointer',
                    color:'#FFFFFF',
                    backgroundColor: 'transparent'
                }} >→</button>
        </div>
       </>
    )
}