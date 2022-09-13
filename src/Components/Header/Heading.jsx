import React from "react";
import '../Header/Heading.css';
import Kojima from '../../Assets/kojima Logo.jpg';
import Playstation from '../../Assets/playstation.png';

function Head() {
    return (

        <picture>
            <div className="Logo-Kojima">
                <img alt="botaologo" src={Kojima} height="80px" width="auto" />
                <img alt="botaologo" src={Playstation} height="40px" width="auto" />
            </div>

            <div className="buyit">
                <button className="btn_play" alt="botaocompra">Buy Director`s Cut - PS5 </button>
                <button className="btn_play" alt="botaocompra">Buy Death Strading - PS4 </button>
            </div>
        </picture>

    )
}

export default Head