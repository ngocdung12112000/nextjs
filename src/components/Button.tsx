import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    disabled?: boolean;
    className?: string;
};


const styleEditButton = {
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer',
    margin: '0',
}

const styleDeleteButton = {
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer',
    margin: '0',
}

const styleCreateButton = {
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: '#5375a7',
    color: 'white',
    cursor: 'pointer',
    margin: '0',
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = '',
}) => {

    const styleButton = className == 'create' ? styleCreateButton : className == 'edit' ? styleEditButton : styleDeleteButton;

    return (
        <div style={styleButton} onClick={onClick} >
            {children}
        </div>
    );
};

export default Button;