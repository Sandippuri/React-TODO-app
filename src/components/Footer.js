import React from 'react'

export default function Footer() {
    let footercss ={
        position:"absolute",
        width:"100%"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footercss}>
            <p className="text-center">
                Copyright &copy; Myreacttodo.com
            </p>
        </footer>
    )
}
