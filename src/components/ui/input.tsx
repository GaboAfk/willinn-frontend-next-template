import React from 'react';

interface InputProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const Input = ({ id, label, type = "text", value, onChange, placeholder } : InputProps) => (
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

export default Input;
