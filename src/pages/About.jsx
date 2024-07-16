import { Link } from "../Link.jsx";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://picsum.photos/600/300?grayscale"
          alt="Foto de prueba"
        />
        <p>
          ¡Hola! Me llamo Miguel y estoy creando un clon de React Router.
        </p>
      </div>
      <Link to="/">Ir a la home</Link>
    </>
  );
}
