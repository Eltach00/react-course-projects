import data from '../../data/data'
import Person from './Person'

export default function Persons(props) {
  return (
    <div>
      {data.map((item) => {
        return <Person key={item.numberrange} {...item} />
      })}
    </div>
  )
}
