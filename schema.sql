
CREATE DATABASE IF NOT EXISTS db_retrogames;

USE db_retrogames;

CREATE TABLE IF NOT EXISTS jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    desenvolvedora VARCHAR(150) NOT NULL,
    imagem_url VARCHAR(500) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO jogos
    (titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES
      (
        'Blades Battles',
        'Mega Drive',
        'QUByte Interactive',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZb7d27F9bGxiM28aAA57Lojed4CC3OekSDjlXVgVrJDDcklK6gsx8Qk&s=10',
        85.00
    ),
    (
        'Street Fighter II',
        'Mega Drive',
        'Capcom',
        'https://upload.wikimedia.org/wikipedia/pt/0/04/Flyer_japan_sf2.jpg',
        95.00
    ),
    (
        'Super Mario World',
        'Mega Drive',
        'Nintendo',
        'https://upload.wikimedia.org/wikipedia/pt/0/06/Super-Mario-World.jpg',
        110.00
    );
