
export default function Square({ value, handleclick, position }) {
  console.log(position)
  return (
    <div className="col">
      <button onClick={() => handleclick(position)} className="box">
        {value}
      </button>
    </div>
  )
}