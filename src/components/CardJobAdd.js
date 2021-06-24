import React from 'react';
import {useForm} from "react-hook-form";
//import {ListJobs} from "../files/job";
//import {addJobs, ListJobs} from "../files/job.js";

const CardJobAdd = (props) => {

    let {add} = props;


    const {register, handleSubmit, formState: { errors }, formState  } = useForm({
        mode: 'onChange'
    });

    const {isSubmitting, isValid} = formState;


    const onSubmit = (data, e) => {

        const Id = () => {
            let ID = "";
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            for ( var i = 0; i < 20; i++ ) {
                ID += characters.charAt(Math.floor(Math.random() * 36));
            }
            return ID;
        }

        e.target.reset();

        add(data.Nom, data.Description, Id());
    }



    return (
        <div className="CardJob">
            <div className="card cardJob">
                <div className="card-body text-justify">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Nom" className="mb-2" {...register("Nom", {
                            required: 'Vous devez entrer un nom de job.'
                        })}/><br/>
                        {errors.Nom && <span>{errors.Nom.message}</span>} <br/>
                        <input type="text" placeholder="Description" className="mb-2" {...register("Description", {
                            required: 'Vous devez rentrer une description de job.'
                        })}/> <br/>
                        {errors.Description && <span>{errors.Description.message}</span>}<br/>
                        <input disabled={isSubmitting || !isValid} type="submit" value="Ajouter" className="mb-2"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CardJobAdd;
