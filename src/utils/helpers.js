export function formatDate(timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  // time.substr(0, 5) + time.slice(-2) :retire les second et d.toLocaleDateString(): affiche la date
  return `${time.substr(0, 5) + time.slice(-2)} | ${d.toLocaleDateString()}`
}
export function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
