export const Square = ({ children, isSelected, updateBoard, gap }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(gap)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
