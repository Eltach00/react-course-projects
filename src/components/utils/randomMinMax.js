export default function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const random = min + Math.random() * (max + 1 - min)
  return Math.floor(random)
}
