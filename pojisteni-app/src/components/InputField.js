export function InputField(props){

    const isTextArea = props.type.toLowerCase()==="textarea";
    const required = props.required || false;
    return(
        <div className="form-group">
            <label>{props.label}:</label>
            {isTextArea ? (
                <textarea className="form-control" required ={required}
                    rows={props.rows} placeholder={props.prompt} 
                    onChange={props.handleChange} value={props.value}
                    name={props.name}
                />
            ):(
                <input className="form-control" required ={required}
                    type={props.type} placeholder={props.prompt}
                    onChange={props.handleChange} value={props.value}
                    name={props.name}
                />
            )}
        </div>
    );
}
export default InputField;