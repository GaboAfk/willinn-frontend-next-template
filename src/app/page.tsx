'use client'

import {Eye, EyeOff, X} from 'lucide-react';
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';

/*interface InputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = ({ id, label, type = "text", value, onChange, placeholder }: InputProps) => (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
        required
      />
    </div>
);

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => (
    <button
        type="submit"
        className="w-full py-2 px-4 bg-pink-500 text-white font-semibold rounded-md shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
    >
        {children}
    </button>
);*/

const _backUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [resetEmail, setResetEmail] = useState('');
  const [resetPassword, setResetPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showRecoveryPassword, setShowRecoveryPassword] = useState(false);
  const router = useRouter();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${_backUrl}/login`, {
        email: email,
        password: password
      });
      if (response.status === 200 && response.data.isSuccess) {
        localStorage.setItem('authEmail', email);
        localStorage.setItem('authToken', response.data.token);
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
          `${_backUrl}/registerUser`,
          {
            name: registerName,
            email: registerEmail,
            password: registerPassword,
          }
      );
      if (response.status === 200) {
        setRegisterName('');
        setRegisterEmail('');
        setRegisterPassword('');
        setShowRegister(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRecoverPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${_backUrl}/recoverPassword`, {
        email: resetEmail,
        password: resetPassword
      });

      if (response.status === 200) {
        setEmail('');
        setResetPassword('');
        setShowRecoveryPassword(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-auto">
        <div className="mb-6">
            <Image src="/willinnlogo.png" alt="Willinn Logo" width="100" height="50" className="mx-auto mb-4"/>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl text-gray-800 font-semibold text-center mb-6">Inicia sesión</h2>
          <form onSubmit={handleSubmit}>
            <Input
                id="email"
                label="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Introduce tu email" />

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="relative mt-1">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Introduce tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                     onClick={toggleShowPassword}>
                  {showPassword ? <EyeOff className="text-gray-400"/> : <Eye className="text-gray-400"/>}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <Button>Ingresar</Button>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 hover:text-gray-700" onClick={() => setShowRegister(true)}>
                Registrarse
              </p>
              <p className="text-sm text-gray-500 hover:text-gray-700" onClick={() => setShowRecoveryPassword(true)}>
                ¿Olvidaste la contraseña?
              </p>
            </div>
          </form>
        </div>
      </div>

      {showRegister && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md relative">
            <X type="button" onClick={() => setShowRegister(false)} className="text-gray-500 hover:text-gray-300 hover:bg-gray-700 rounded-full absolute top-2 right-2 cursor-pointer"/>
            <h2 className="text-2xl text-gray-800 front-semibold mb-4">Registrar Usuario</h2>
            <form onSubmit={handleRegister}>
              <Input
                  id="register-name"
                  label="Nombre"
                  type="string"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  placeholder="Introduce tu nombre" />
              <Input id="register-email" label="Email" type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} placeholder="Introduce tu email" />
              <Input id="register-password" label="Contraseña" type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder="Introduce tu contraseña" />

              <div className="mb-4">
                <Button>Registrarse</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showRecoveryPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md relative">
            <X type="button" onClick={() => setShowRecoveryPassword(false)} className="text-gray-500 hover:text-gray-300 hover:bg-gray-700 rounded-full absolute top-2 right-2 cursor-pointer"/>
            <h2 className="text-2xl text-gray-800 front-semibold mb-4">Recuperar Contraseña</h2>
            <form onSubmit={handleRecoverPassword}>
              <Input
                  id="reset-email"
                  label="Email"
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="Email a recuperar" />
              <Input
                  id="reset-password"
                  label="Contraseña"
                  type="password"
                  value={resetPassword}
                  onChange={(e) => setResetPassword(e.target.value)}
                  placeholder="Nueva contraseña" />
              <div className="mb-4">
                <Button>Recuperar</Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
