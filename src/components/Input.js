
function Input({ section, label, value, id, name, onChange }){
    if(!id){
        id = 0;
    }
    let type = name == "number" ? "number" : "text"
    return (
        <div>
          <label htmlFor={id}>
            <span className='hidden'>{label} </span>
            <input
              type= {type}
              alt = {section}
              id={id}
              value={value}
              placeholder={label}
              name ={name}
              onChange={onChange}
            />
          </label>
        </div>
      );
}

export default Input;