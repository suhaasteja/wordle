import "./styles.css"

function Boxes({boxes}) {
    
    return (
        <div className="boxes-container">
            {
                boxes.map((row, i) => {
                    return (
                        <div className="row" key={i}>
                            {row.map((b, i) => <div key={i} className="box">{b}</div>)}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Boxes