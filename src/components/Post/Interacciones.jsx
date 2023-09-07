import BotonDeLike from "./Buttons/LikeButton"

export default function Interaccciones({ cantidadDeLikes }) {
    return (
        <>
            {cantidadDeLikes}
            <BotonDeLike/>
        </>
    )
}