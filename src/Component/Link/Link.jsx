import '../NavHeader/NavHeader'
import PropTypes from 'prop-types'
const Link = ({route}) => {
    const {id, path, name} = route;
    return (
        <div className='mr-6 text-3xl  nav-bg p-3 rounded-lg'>
            <li><a href={path} className='text-2xl'>{name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.func, 
}

export default Link;