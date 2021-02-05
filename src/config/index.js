import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const error = () => toast.error("Error!");
export const success = () => toast.success("Success");
