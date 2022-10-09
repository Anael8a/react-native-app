export const Login = () => {
    
    return (
        <>
            <h3>Login</h3>
            <div className="FicAlertaInfo_Div">
                Validando informacion...
            </div>
            <div className="ficAlertaDanger_div">
                No autenticado....
            </div>
            <div className="ficAlertSuccess_Div"> 
                Autenticado...
            </div>
            <button className="ficLogin_Button"
            >
                Login
            </button>
            <button className="ficLogout_Button"
            >
                Logout
            </button>
        </>
    )
}