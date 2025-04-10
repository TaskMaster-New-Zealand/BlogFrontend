import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

interface FormData {
  username: string;
  password: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });

    return(
        <div>
            <h1>Create an account</h1>
                <form>
                    <label>Username</label>
                    <input 
                    type="text"
                    placeholder="Insert a username"
                    id="username"
                    name="username"
                    required
                    ></input>

                    <label>Password</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    required></input>
                </form>
        </div>
    );
};

export { Register };
