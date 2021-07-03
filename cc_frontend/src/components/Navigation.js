import { NavLink } from 'react-router-dom'

const Navigation = () => {

    const link = {padding: '10px'}

    return(
        <div>   
            <NavLink exact to="/" style={link}>
                Home
            </NavLink>
            <NavLink exact to="/people" style={link}>
                People
            </NavLink>
            <NavLink exact to="/people/new" style={link}>
                New Person
            </NavLink>
            
        </div>
    )
}

export default Navigation