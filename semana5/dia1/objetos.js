const persona = {
    nombre: 'July',
    dni: '12345678',
    telefono: '999812333',
    idiomas: ['español', 'inglés', 'francés'],
};


console.log(persona.dni);
console.log(persona.idiomas);

//Ingresar un nuevo idioma a la persona
persona.idiomas.push('portugués');


//agregando un nuevo atributo
persona.direccion= {}
persona.direccion.calle = 'Lima';
persona.direccion.distrito= 'Miraflores';
persona.direccion.ciudad= 'Lima';

console.log('Persona actualizada: ',persona);


//Agregando un atributo a la persona
persona.estudios = {
    primaria: 'Trilce Los Olivos',
    secundaria: 'Trilce Los Olivos',
    superior: 'PUCP'
};
