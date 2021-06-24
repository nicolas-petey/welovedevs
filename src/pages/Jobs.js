import React, {useEffect, useState} from 'react';
import Cardjob from "../components/CardJob";
import Navigation from "../components/Navigation";
//import CardJobAdd from "../components/CardJobAdd";
import {useForm} from "react-hook-form";

const Jobs = () => {

    //Data
    const [data, setData] = useState([]);

    //No FireBase

    //variable contenant les données du fichier "jobs_welovedevs_exerice.json"
    let ListJobs = require('../files/jobs_welovedevs_exerice.json');


    // set les data dans le tableau des données
    useEffect( () => {

        setData(ListJobs);

    },[ListJobs]);


    //fontion de suppression mais à moitier fonctionnels
    function supprimer(id){
        ListJobs.forEach(function (element) {
            if (element.id === id){

                const Index = ListJobs.findIndex(el => {
                    return el.id === String(id);
                });

                ListJobs.splice(Index, 1);
            }
        })


    }

    //Creation d'un formulaire
    const {register, handleSubmit, formState: { errors }, formState  } = useForm({
        mode: 'onChange'
    });

    //récupération de l'état du formulaire
    const {isSubmitting, isValid} = formState;


    //constante lors de l'envoie du formulaire
    const onSubmit = (data, e) => {

        //constante de création d'un ID
        const Id = () => {
            let ID = "";
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-/";
            for ( var i = 0; i < 20; i++ ) {
                ID += characters.charAt(Math.floor(Math.random() * 36));
            }
            return ID;
        }

        //création de nouvelles données en JSON
        let newData = {
            "title": data.Nom,
            "descriptionPreview": data.Description,
            "id": Id(),
            "smallCompany" : {
                "companyName" : "",
                "logoImageLink" : ""
            }
        };

        //vide les inputs
        e.target.reset();

        //envoie des nouvelles données dans l'array ListJobs
        ListJobs.push(newData);
    }

    return (

        <div className="Jobs">
            <Navigation />
            <div className="container">


                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <div className="row">

                    {/*Parcour de l'array data puis affichage dans un component enfant*/}
                    {data.map((job) => (
                        <Cardjob job={job} key={job.id} suppimer={supprimer}/>
                    ))}

                    {/*Création d'une nouvelle card pour l'ajout dans la liste ListJobs ainsi qu'un formulaire pour faire ceci*/}
                    <div className="card cardJob">
                        <div className="card-body text-justify">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder="Nom" className="mb-2" {...register("Nom", {
                                    required: 'Vous devez entrer un nom de job.'
                                })}/><br/>
                                {errors.Nom && <span>{errors.Nom.message}</span>} <br/>
                                <textarea placeholder="Description" className="mb-2" {...register("Description", {
                                    required: 'Vous devez rentrer une description de job.'
                                })}/> <br/>
                                {errors.Description && <span>{errors.Description.message}</span>}<br/>
                                <input disabled={isSubmitting || !isValid} type="submit" value="Ajouter" className="mb-2"/>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Jobs;
