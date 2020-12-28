import React from 'react'

import CardList from '../card-list/card-list'

let musiques = [
    {
        id: "1",
        auteur: "Daft Punk",
        annee: 2013,
        titre: "Get lucky",
        imageUrl: "https://www.sakafetmatinik.fr/wp-content/uploads/2016/10/hqdefault-598.jpg"
    },
    {
        id : "2",
        auteur: "David Guetta ft Sia",
        annee: 2011,
        titre: "Titanium",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg"
    },
    {
        id : "3",
        auteur: "Shaka Ponk",
        annee: 2019,
        titre: "Smells like teen spirits",
        imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg"
    },
    {
        id : "4",
        auteur: "Imagine Dragon",
        annee: 2018,
        titre: "Natural",
        imageUrl: "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg"
    }
]

const Musiques = () => {

return(
    <div>
    <h1>Ma musique</h1>
    <CardList />
    </div>

)

}

export default Musiques;