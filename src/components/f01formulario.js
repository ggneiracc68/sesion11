import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',     //igual a name
        apellido: ''    //igual a name
    })

    const handleInputChange = (evento) => {
        console.log(evento.target.value)
        setDatos({
            ...datos,
            [evento.target.name] : evento.target.value
        })
    }

    return ( 
        <Fragment>
            <h1>Formulario</h1> 
            <form className="row">
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Escriba nombres"
                        name="nombre"
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Escriba apellidos"
                        name="apellido" 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="col-md-3">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
        );
}
 
export default Formulario; 