function studentRegisterInput({type, name, onkeyup, placeholder}) {
    return `
        <div>
            <input type='${type}' name='${name}' onkeyup='${onkeyup}(event)' placeholder='${placeholder}' />
        </div>
    `
}