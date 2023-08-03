import { useContext } from 'react';
import google from '../../../../public/google.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
const Social = () => {
    const {googleLogIn, gitHubLoginIn, facebookLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogle = () =>{
        googleLogIn()
        .then(result =>{
            const googleLoggedUser = result.user;
            console.log(googleLoggedUser);
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const handleGithub = () =>{
        gitHubLoginIn()
        .then(result =>{
            const gitLoggedIn = result.user;
            console.log(gitLoggedIn);
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const handleFacebook = () =>{
        facebookLogIn()
        .then(result =>{
            const facebookLogged = result.user;
            console.log(facebookLogged);
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="flex justify-center gap-4 align-middle items-center">
            <Link><img onClick={handleGoogle} className="w-10" src={google} alt="" /></Link>
            <Link><img onClick={handleGithub} className="w-10" src="https://i.ibb.co/5vKgQps/github-1.png" alt="" /></Link>
            <Link><img onClick={handleFacebook} className="w-10" src="https://i.ibb.co/jkgHFDR/facebook-1.png" alt="" /></Link>
        </div>
    );
};

export default Social;