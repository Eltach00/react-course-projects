import { useEffect, useState } from 'react'
import randomInteger from '../components/utils/randomMinMax'
import styles from './quoteStyle.module.css'
import colors from '../data/colors'

const API_DATA =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const QuoteMachine = () => {
  const [data, setData] = useState([])
  const [randomQuote, setrandomQuote] = useState(0)
  const [color, setColor] = useState({})
  const [randomColor, setRandomColor] = useState(0)

  const [classText, setclassText] = useState(styles.text)
  useEffect(() => {
    setclassText(styles.text + ' ' + styles.change)
  }, [])
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(API_DATA)
        const json = await response.json()
        const data = json.quotes
        setData(data)
      } catch (error) {
        alert(error.message)
      }
    }
    getData()
  }, [])

  function handleClick() {
    setclassText(styles.text)
    setrandomQuote(randomInteger(0, data.length - 1))
    setRandomColor(randomInteger(0, colors.length - 1))
    setColor({
      backgroundColor: colors[randomColor],
      transition: `background-color 1000ms linear`,
    })
    setTimeout(() => {
      setclassText(styles.text + ' ' + styles.change)
    }, 500)
  }

  return (
    <>
      <div style={color} id="container" className={styles.container}>
        <div id="box" className={styles.box}>
          <div id="text" className={classText}>
            <span id="sp">{data.length ? data[randomQuote].quote : ''}</span>
            <div id="author" className={styles.author}>
              {data.length ? data[randomQuote].author : ''}
            </div>
            <button
              style={color}
              id="btn"
              onClick={handleClick}
              className={styles.btn}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuoteMachine
