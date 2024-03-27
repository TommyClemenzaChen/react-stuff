import rat from '../assets/rat.jpg'


function Card(){
    return (
        <div className= "card">
            <img className = "card-image" src = {rat} alt = "profile picture"></img>
            <h2 className = "card-title">Tomy</h2>
            <p className = "card-text">Hello I am 3rd year cs major at ucsc</p>

        </div>
    )
}

export default Card;