const {CreatedGroup, CreatingStudent} = require('./stydents');

const groupe18 = 'jscx-18-00';
const groupe20 = 'jscx-20-00';
const stydentR = "Kotsur";
const stydentS = "Stasy";

CreatedGroup(groupe18);
CreatingStudent(groupe18, 'Stasy', 'Name: Nastya; Age: 19',
    `./${groupe18}/${stydentS}/stasy.JPG`, './photos/stasy.JPG');

CreatedGroup(groupe20);
CreatingStudent(groupe20, 'Kotsur', 'Name: Roman; Age: 18',
    `./${groupe20}/${stydentR}/Roman.JPG`, './photos/Roman.JPG');