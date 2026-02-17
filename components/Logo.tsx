import React from 'react';
import { Link } from 'react-router-dom';

const logoUrl = "https://i.ibb.co/DH6XxQZ2/IMG-7266.png";

const Logo: React.FC = () => (
    <Link to="/" className="flex items-center group">
        <img 
            src={logoUrl} 
            alt="DevSpark Soft IT Logo" 
            className="h-14 w-auto object-contain group-hover:scale-205 transition-transform duration-600"
        />
    </Link>
);

export default Logo;