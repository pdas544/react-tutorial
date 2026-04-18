
import { useState } from "react";


const App = () => {
    const [movies, setMovie] = useState([
        {title: "The Matrix",
        ratings: 8.7},
        {title: "Inception",
        ratings: 8.8},
        {title: "Interstellar",
        ratings: 8.6}
       
    ]);

    const handleClick = () =>{
        setMovie([...movies, {title: "The Dark Knight", ratings: 9.0}]);
    }

    

    return (
        <div className="container-fluid p-2">
            {movies.map((m) => (
                <ul>
                    <li key={m.title}>{m.title}</li>
                </ul>
            ))}
            <button onClick={handleClick} class="btn btn-primary">Add Movie</button>
        </div>
    );
   
}

export default App;