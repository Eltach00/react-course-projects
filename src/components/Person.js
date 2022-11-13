export default function Person(props) {
  return (
    <div>
      <h3>
        {props.name} {props.email}
      </h3>
    </div>
  )
}
