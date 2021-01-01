import React from 'react'
import "./InputOption.css"

function InputOption({Icon, title, color_pass}) {
    return (
        <div className="inputOption">

            <Icon style={{ color: color_pass}} />
                <h4>{title}</h4>

        </div>
    )
}
export default InputOption
