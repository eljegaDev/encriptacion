let database = [
    { id: 1, nombre: "Anyi", secreto: "Amo programar en JavaScript" },
    { id: 2, nombre: "Ana", secreto: "Me gustan los gatos mas que los perros" },
    { id: 3, nombre: "Luis", secreto: "El cafe es mejor que el té" },
    { id: 4, nombre: "Sofia", secreto: "Prefiero el frio que el calor" },
    { id: 5, nombre: "Carlos", secreto: "Me encanta nadar" },
    { id: 6, nombre: "Laura", secreto: "La musica clasica me gusta" },
    { id: 7, nombre: "Diego", secreto: "Juego videojuegos mas de lo que deberia" },
    { id: 8, nombre: "Patricia", secreto: "Sueño con viajar mucho" },
    { id: 9, nombre: "Omar", secreto: "Me gusta levantarme temprano" },
    { id: 10, nombre: "Teresa", secreto: "Colecciono libros antiguos" },
    { id: 11, nombre: "Daniel", secreto: "La pizza con piña no deberia existir" },
    { id: 12, nombre: "Monica", secreto: "Me gusta la astrologia" },
    { id: 13, nombre: "Alberto", secreto: "Nunca he visto nieve" },
    { id: 14, nombre: "Gloria", secreto: "Quiero aprender a surfear" },
    { id: 15, nombre: "Fernando", secreto: "El cine de terror es mi favorito" },
    { id: 16, nombre: "Elena", secreto: "Hablo tres idiomas" },
    { id: 17, nombre: "Pablo", secreto: "Toco la guitarra" },
    { id: 18, nombre: "Susana", secreto: "Escribo poesía" },
    { id: 19, nombre: "Gustavo", secreto: "No me gusta el futbol" },
    { id: 20, nombre: "Carmen", secreto: "La fotografía es mi hobby" }
];


function encriptarDB(db) {
    return db.map(registro => {
        const secretoEncriptado = CryptoJS.AES.encrypt(registro.secreto, 'clave-secreta').toString();
        return { ...registro, secreto: secretoEncriptado };
    });
}

function desencriptarDB(db) {
    return db.map(registro => {
        const secretoDesencriptado = CryptoJS.AES.decrypt(registro.secreto, 'clave-secreta').toString(CryptoJS.enc.Utf8);
        return { ...registro, secreto: secretoDesencriptado };
    });
}

document.getElementById('decryptBtn').addEventListener('click', () => {
    mostrarDB(database);
});


function mostrarDB(db) {
    const dbContainer = document.getElementById('databaseDisplay');
    dbContainer.innerHTML = '';
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headRow = document.createElement('tr');

    ['ID', 'Nombre', 'Secreto'].forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headRow.appendChild(header);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    db.forEach(registro => {
        const row = document.createElement('tr');
        Object.values(registro).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    dbContainer.appendChild(table);
}


document.getElementById('encryptBtn').addEventListener('click', () => {
    const dbEncriptada = encriptarDB(database);
    mostrarDB(dbEncriptada);
});

mostrarDB(database);
