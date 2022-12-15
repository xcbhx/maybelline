import './HomePage.css';

export default function HomePage({getAllMakeup}) {
    return (
        <>
        <h1> 
            HomePage
        </h1>
        <button onClick={getAllMakeup}>MAKEUP</button>
        </>
    );
}