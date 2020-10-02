import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://finance-tracker-415f2.firebaseio.com/'
});