function EInput({ section, label, property, value, id, name, index, onChange }){
    return (
        <div>
          <label htmlFor={id}>
            <span className='hidden'>{label} </span>
            <input
              property={property}
              type='text'
              alt = {section}
              index = {index}
              id={id}
              value={value}
              placeholder={label}
              name={name}
              onChange={(e) => onChange(section,index, e)}
            />
          </label>
        </div>
      );
  }
export default EInput;