import Foto from "./Foto";
import Info from "./Info";
import Comments from "./Inputs/coments";
import Interaccciones from "./Interacciones";


export default function Post({ datos }) {
    return (
        <section>
            <h1>Soy un posteo</h1>
            <Info userPic={datos.userPic} username={datos.username} />
            <Foto photo={datos.content} />
            <Interaccciones cantidadDeLikes={datos.cantidadDeLikes} />
            <Comments />
        </section>
    )
}