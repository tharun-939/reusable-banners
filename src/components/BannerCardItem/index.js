// Write your code here.

const CardContainer = props => {
  const {cardObj, heading, paragraph, button} = {...props}
  const {className, headerText, description} = cardObj
  return (
    <li>
      <div className={`${className}`}>
        <h1 className={`${heading}`}>{headerText}</h1>
        <p className={`${paragraph}`}>{description}</p>
        <button className={`${button}`} type="button">Show More</button>
      </div>
    </li>
  )
}

export default CardContainer
