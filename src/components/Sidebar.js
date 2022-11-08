import { NavItem } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
/**
 * @name Sidebar
 * @returns 
 */
export default function Sidebar() {
    const navigate = useNavigate() ;
      
  return (
      <nav style={{width:'10%',backgroundColor:'lightgrey',flexDirection:'column',color:'grey'}}>
            <NavItem style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/contactsList")}>
                Home
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/register")} >
                Register
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/greet")} >
                Greet
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/count")} >
               Counter
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/functionClick")} >
                FunctionClick
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/eventbind")} >
                EventBind
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/methodAsProps")} >
                MethodAsProps
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/userGreet")} >
                UserGreeting
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/nameList")} >
                ListRendering
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/lifeCycle")} >
                LifeCycleComponent
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/fragment")} >
                Fragment demo
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/pureComp")} >
                Pure/Memo demo
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/ref")} >
                Ref demo
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/portal")} >
                Portal demo
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/composition")} >
                Composition demo
            </NavItem>
            <NavItem  style={{padding:15,justifyContent:'center',textAlign:'center',cursor:'pointer',borderBottom:'1px solid #cbc8c8'}} onClick={() => navigate("/propDrill")} >
               PropDrill demo
            </NavItem>
        </nav>
    
  )
}
