export default function Image({ src, ...rest }) {
  src =
    src && src.includes("https://")
      ? src
      : "https://bookit-s5y2.onrender.com/uploads/" + src;
  return <img {...rest} src={src} alt={""} />;
}
