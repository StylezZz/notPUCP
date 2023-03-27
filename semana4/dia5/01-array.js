const alumnos = ["Juan","Pedro","María","José","Luis"];

//for 
for(let index=0;index<alumnos.length;index++){
    //alumnos[index]= alumnos[index].toUpperCase();
    //console.log(alumnos[index]);
}

//forEach
//alumnos.forEach((alumno,index)=>{console.log(alumno,index)});

//map
const nuevoAlumnos = alumnos.map((alumno,index)=>{
    return `${index+1} - ${alumno.toUpperCase()}`
})

//console.log(nuevoAlumnos);

//filter
const alumnosSinMaria = alumnos.filter((alumno,index)=>{
    //return alumno !== "María";
})

//console.log(alumnosSinMaria);

//find
const alumnoEncontrado = alumnos.find((alumno,index)=>{
    return alumno !== "María";
})

//console.log(alumnoEncontrado);

//findIndex

let indexAlumno = alumnos.findIndex((alumno,index)=>{
    return alumno === "María";
})

//console.log(indexAlumno);

//some
const existeAlumno = alumnos.some((alumno,index)=>{
    return alumno === "María";
})