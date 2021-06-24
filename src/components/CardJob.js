import React from 'react';

const Cardjob = (props) => {

    //Initialisation de {job} pour les données venant de Jobs.js, puis {supprimer} qui permet d'acceder a la function supprimer
    const {job, suppimer} = props;


    //Fonction qui fait appel a la fonction supprimer de la class Parent (Jobs.js)
    function CardSupprimer(){
        suppimer(job.id);
    }

    return (
        <div className="card cardJob">
            <div className="card-body">
                {/*job.title = titre du job, job.descriptionPreview = description du job*/}
                <h1 className="card-title font-weight-bold">{job.title}</h1>
                <p className="card-text">{job.descriptionPreview}</p>
                <div className="card-footer">
                    {job.smallCompany.companyName && <p className="">de - {job.smallCompany.companyName}</p>}

                    <img src={job.smallCompany.logoImageLink} alt="" className="w-25 h-25"/>
                    <button className="btn bg-danger float-right align-bottom" onClick={CardSupprimer}>Supprimer</button>
                </div>

            </div>
        </div>
    );
};

export default Cardjob;
