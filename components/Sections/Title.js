export default function Title({ title, index }) {
    return (
        <>
            { index === 0 && <h1>{title}</h1>}
            { index !== 0 && <h2>{title}</h2>}
        </>
    )
}