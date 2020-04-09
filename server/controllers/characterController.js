const masterCharacterList = []
id = 0

module.exports = {
    getAllCharacters: (req, res) => {
        const db = req.app.get('db')
        db.get_characters()
        .then(characters => status(200).send(characters))
        .catch(err => console.log(err))
       
    },
    getCharacter: (req, res) => {
        const {id} = req.params
      const db = req.app.get('db')
      db.get_character(id)
      .then(character => res.status(200).send(character))
      .catch(err => console.log(err))
    },
    addCharacter: (req, res) => {
        const newCharacter = {...req.body}
       const db = req.app.get('db')

       db.add_character(newCharacter)
       .then(newCharacter => res.status(200).then(newCharacter)
       .catch(err => console.log(err)))
        
        
    },
    editCharacter: (req, res) => {
        const {id} = req.params
        const {name, image} = req.body
       const db = req.app.get('db')
       db.edit_character({id, name, image})
       .then( updatedCharacter => res.status(200).send(updatedCharacter))
       .catch(err => console.log(err))
    },
    deleteCharacter: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')

        db.delete_character(id)
        .then(() => res.status(200).send())
        .catch(err => console.log(err))
    }
}
