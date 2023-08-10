
const Formulario = ({name, setName, password, setPassword}) => {

    const preventEvent = (e) => {
        e.preventDefault() 

    }

    return (
        <div>
            <form onSubmit={preventEvent}>

                <label>Nombre</label>
                <input 
                    className="form-control"
                    type='text'
                    onChange={(e) => setName(e.target.value)} 
                    value={name}
                    />
                <label>Contraseña</label>
                <input 
                    className="form-control" 
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />

            </form>


        </div>
    )
}

export default Formulario