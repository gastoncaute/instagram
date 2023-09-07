import Image from "next/image"

export default function Foto({ photo }) {
    return (
        <h3>
            <Image 
                alt="Foto de la publicacion" 
                src={photo}
                width={1000}
                height={1000}
            />
        </h3>
    )
}