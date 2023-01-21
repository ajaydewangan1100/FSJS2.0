// Q29 Extension of file - - - - - - - - - - - - - - - - - - - - - - - 


function findExtension(){
    let fileName = prompt('Type file name with extension :');

    let extension = fileName.slice(fileName.lastIndexOf('.'))
    console.log(extension);
}
findExtension();