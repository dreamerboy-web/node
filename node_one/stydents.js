// Зробити функцію, яка буде робити профайли стуентів по групах.
//     Створити папка jscx-1800 та jscx-2000
// В конжній папці має бути ще одна пака з імям студента а-ля Viktor Okten. В той файл потрібно записати інфу про студента.
// ЙОго данні. Довільні.
//     Також на компі мають знаходитьсь фотки. ФОто потрібно скопіювати в папку з профіайлом студента стрімами.



const fs = require('fs');


exports.CreatedGroup = groupFolder =>{
    fs.mkdir(`./${groupFolder}`, err => {

        if(!err){
            console.log(`Group ${groupFolder} was created! Congratulation!!`);
        }

    })
};

exports.CreatingStudent = (group, student, info, wreheTo, whereFrom) =>{

    fs.mkdir(`./${group}/${student}`, err => {

        if(!err) console.log(`Stydent ${student} was added to ${group}! Congratulation!!`);

    });

    fs.writeFile(`./${group}/${student}/info.txt`, JSON.stringify(info), (err)=>{

        if(!err){
            console.log(`Stydent ${student} has info: ${JSON.stringify(info)}`);
        }

    });

    fs.createReadStream(whereFrom).pipe(fs.createWriteStream(wreheTo));
    console.log(`${student} added photo!`);

};

