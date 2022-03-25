import React from "react";
import './style.css'

const Music = ({url, tittle, artist}) => {
    return <div className="isi">
          
          <img src={url}/>
          
          <div className="detail">
            <h2>Tittle : {tittle}</h2>
            <h3>Artist : {artist}</h3>
          </div>

          <button>Select</button>
        </div>
}

export default Music;