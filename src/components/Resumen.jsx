import React from 'react'
import styled from '@emotion/styled';
import {primerMayuscula } from '../helper';
import propTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    // Extraer de datos:
    const {marca,year,plan}=datos;

    if(marca===''||year===''||plan==='') return null;

    return (
        <ContenedorResumen>
            <h2>Resument de cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes = {
    datos: propTypes.object.isRequired
}

export default Resumen
