import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {loginWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = ()=> {
        loginWithGoogle()
        .then(result =>{
            console.log(result.user)
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='text-center'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-circle">
                G
            </button>
        </div >
    );
};

export default SocialLogin;