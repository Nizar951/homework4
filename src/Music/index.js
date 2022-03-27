import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'

const Music = ({url, tittle, artist}) => {
    return <div className="card">
                <img src={url} className="card-img-top" alt="cover  " />
            <div className="card-body">
                <p className="card-text">Album - {tittle}</p>
                <h5 className="card-title">Artist : {artist}</h5>
            </div>
            <button type="button" class="btn btn-success">Success</button>
        </div>

    {/* <div className="isi">   
          <img src={url}/>   
          <div className="detail">
            <h2>Tittle : {tittle}</h2>
            <h3>Artist : {artist}</h3>
          </div>

          <button>Select</button>
        </div> */}
}

export default Music;