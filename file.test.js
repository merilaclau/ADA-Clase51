/***************************************************
* Desarrollar una función que reciba por parámetro
* un día de la semana y devuelva el número que 
* le corresponde.
* Comenzar por los casos de test, y luego hacer 
* la función.
*/

const dayToNum = (day) => {
    switch (day.toLowerCase()) {
        case "lunes":
            return 1;
        case "martes":
            return 2;
        case "miércoles":
            return 3;
        case "jueves":
            return 4;
        case "viernes":
            return 5;
        case "sábado":
            return 6;
        case "domingo":
            return 7;
        default:
            throw new Error ("El valor ingresado no es válido");
    }
}

test('Pasar "Lunes" devuelve 1', () =>{
    expect(dayToNum("Lunes")).toBe(1);
});

test('Pasar "Jueves" devuelve 4', () =>{
    expect(dayToNum("Jueves")).toBe(4);
});

test('Pasar "jueves" con minúscula también devuelve 4', () =>{
    expect(dayToNum("jueves")).toBe(4);
});

test('Pasar "gato" devuelve error', () =>{
    expect(() => dayToNum("gato")).toThrow("El valor ingresado no es válido");
});

//////////////////////////////////////////////////
/**
* Una funcion que reciba o un numero o un string
* correspondiente a un mes, y devuelva el opuesto.
* (Si recibe 12, devuelve Diciembre, si recibe Diciembre, devuelve 12).
* Comenzar por los tests, recordar tirar errores y testearlos.
*/

const monthNumConvert = (value) => {
    if (typeof value == "string") {
        switch (value.toLowerCase()) {
            case "enero":
                return 1;
            case "febrero":
                return 2;
            case "marzo":
                return 3;
            case "abril":
                return 4;
            case "mayo":
                return 5;
            case "junio":
                return 6;
            case "julio":
                return 7;
            case "agosto":
                return 8;
            case "septiembre":
                return 9;
            case "octubre":
                return 10;
            case "noviembre":
                return 11;
            case "diciembre":
                return 12;
            default:
                throw new Error ("El valor ingresado no es válido");
        }
    }
    else if (typeof value == "number") {
        switch (value) {
            case 1:
                return "enero";
            case 2:
                return "febrero";
            case 3:
                return "marzo";
            case 4:
                return "abril";
            case 5:
                return "mayo";
            case 6:
                return "junio";
            case 7:
                return "julio";
            case 8:
                return "agosto";
            case 9:
                return "septiembre";
            case 10:
                return "octubre";
            case 11:
                return "noviembre";
            case 12:
                return "diciembre";
            default:
                throw new Error ("El valor ingresado no es válido");
        }

    }
    else throw new Error ("El valor ingresado no corresponde a un tipo de dato válido");
}

test('Pasar "Enero" devuelve 1', () =>{
    expect(monthNumConvert("Enero")).toBe(1);
});

test('Pasar "Diciembre" devuelve 12', () =>{
    expect(monthNumConvert("Diciembre")).toBe(12);
});

test('Pasar "diciembre" con minúscula también devuelve 12', () =>{
    expect(monthNumConvert("diciembre")).toBe(12);
});

test('Pasar 3 devuelve "marzo"', () =>{
    expect(monthNumConvert(3)).toBe("marzo");
});

test('Pasar 7 devuelve "julio"', () =>{
    expect(monthNumConvert(7)).toBe("julio");
});

test('Pasar 10 devuelve "octubre"', () =>{
    expect(monthNumConvert(10)).toBe("octubre");
});

test('Pasar "gato" devuelve error', () =>{
    expect(() => monthNumConvert("gato")).toThrow("El valor ingresado no es válido");
});

test('Pasar "13" devuelve error', () =>{
    expect(() => monthNumConvert("13")).toThrow("El valor ingresado no es válido");
});

test('Pasar true devuelve error', () =>{
    expect(() => monthNumConvert(true)).toThrow("El valor ingresado no corresponde a un tipo de dato válido");
});

//RESULTADOS DE LOS TESTS
/*
> test@1.0.0 test /Users/Meri/Desktop/ADA online/ADA-Clase51
> jest

 PASS  ./file.test.js
  ✓ Pasar "Lunes" devuelve 1 (2 ms)
  ✓ Pasar "Jueves" devuelve 4
  ✓ Pasar "jueves" con minúscula también devuelve 4 (1 ms)
  ✓ Pasar "gato" devuelve error (1 ms)
  ✓ Pasar "Enero" devuelve 1
  ✓ Pasar "Diciembre" devuelve 12
  ✓ Pasar "diciembre" con minúscula también devuelve 12
  ✓ Pasar 3 devuelve "marzo"
  ✓ Pasar 7 devuelve "julio" (1 ms)
  ✓ Pasar 10 devuelve "octubre"
  ✓ Pasar "gato" devuelve error
  ✓ Pasar "13" devuelve error (1 ms)
  ✓ Pasar true devuelve error

Test Suites: 1 passed, 1 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        1.47 s
Ran all test suites.
*/
