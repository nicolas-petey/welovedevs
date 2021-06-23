export let ListJobs = require('./jobs_welovedevs_exerice.json');
export let fs = require('fs');

export function addJobs(Description, Nom) {

    const makeId = () => {
        let ID = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for ( var i = 0; i < 12; i++ ) {
            ID += characters.charAt(Math.floor(Math.random() * 36));
        }
        return ID;
    }

    let newData = {
        "descriptionPreview": Description,
        "title": Nom,
        "id": makeId()
    };

    ListJobs.push(newData);

    console.log(ListJobs);

    // convert JSON object to string
    const data = JSON.stringify(newData);

    // write JSON string to a file
    fs.writeFileSync('jobs_welovedevs_exerice.json', data);

    window.location.reload();

}


