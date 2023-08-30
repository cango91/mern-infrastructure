import { useState } from "react";
import { logIn } from "../../utilities/users-service";


export default function LoginForm({setUser}){
    const [formData, setFormData] = useState({email: '', password: ''});
    const [error, setError] = useState('');

    function handleChange(e){
        setFormData({...formData, [e.target.name]:e.target.value});    
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const user = await logIn(formData);
            setUser(user);
        } catch (error) {
            setError('Could not log you in. Try again.');
        }
    }

    
    return (
        <div>
          <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
              <button type="submit">LOG IN</button>
            </form>
          </div>
          <p className="error-message">&nbsp;{error}</p>
        </div>
      );
}