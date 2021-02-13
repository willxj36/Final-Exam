import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {

    return(
        <div className="navbar bg-dark">
            <Link to='/' className="btn btn-success">Home</Link>
            <Link to='/books' className="btn btn-primary">Book List</Link>
        </div>
    )

}

export default Navbar;