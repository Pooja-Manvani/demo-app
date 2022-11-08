import UserGreeting from "./UserGreeting"

/**
 * @name Navbar
 * @description Header rendering.
 */
export const Navbar = () => {
    
    return (
        <div style={{backgroundColor:'lightgrey',padding:20,borderBottom:'1px solid #cbc8c8',display:'flex'}}>
        <h3>Header</h3>
        
        <div style={{padding:7,flexGrow:1,textAlign:'end'}}>
            <UserGreeting />
        </div>
        
        </div>
    )
}