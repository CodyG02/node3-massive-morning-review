UPDATE characters
SET name = ${name}, image = ${image}
WHERE id = ${id}
returning *;

