import React, { useState, useEffect } from "react";
import './destinos.css'
import Footer from "../../components/Footer";
import api from '../../services/api'

import Card from "../../components/Card";



export default () => {

    const [destinos, setDestinos] = useState([])

    useEffect(() => {
        api.get("/destinos").then(({ data }) => {
            setDestinos(data)
        })
      }, []);
      console.log(destinos)

    return (
        <div className="body-destinos">
            <h1 className="h1-destino">Destinos</h1>
            <section className="cards-destinos">
                {
                    destinos?.map((destino) => (
                        <Card path={"https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/09/turismo-1280x720.jpeg"} valor={destino.preco} titulo={destino.nome} key={destino.id} />
                    ))
                }
            </section>
            <Footer />
        </div>
    )
}