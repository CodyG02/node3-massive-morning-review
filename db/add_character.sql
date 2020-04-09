INSERT INTO characters
(name, image)
VALUES
(${name}, ${image})
RETURNING *;