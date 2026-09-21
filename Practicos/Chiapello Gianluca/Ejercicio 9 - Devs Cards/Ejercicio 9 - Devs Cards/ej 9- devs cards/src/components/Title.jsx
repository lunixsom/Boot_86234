export default function Title({ text, subtitle }) {
    return (
        <div>
            <h1>{text}</h1>
            {subtitle && <p>{subtitle}</p>}
        </div>
    )
}
