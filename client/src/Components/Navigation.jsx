import {Link} from 'react-router-dom';

export default function Navigation() {
    return(
        <>
            <Link to ='/tasks'>
                <h1>task App</h1>
            </Link>

            <Link to = '/tasks-creat'>
                crear task
            </Link>
        </>
    )
}