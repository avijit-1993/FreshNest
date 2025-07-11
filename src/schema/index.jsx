import * as Yup from 'yup';


const currentYear = new Date().getFullYear();

const formSchema = Yup.object({
    fname:Yup.string().min(3,'First name must be at least 3 characters').required("Please Enter a proper First name "),
    lname:Yup.string().required("Please Enter a proper Last name "),
    email:Yup.string().email().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email').required("Please Enter a proper Email "),
    phone:Yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('Phone number is required'),
    address:Yup.string().required('Please Enter a proper Address'),
    landmark:Yup.string().required('Please Enter a proper Landmark'),
    city:Yup.string().required('Please Enter a proper City'),
    state:Yup.string().required('Please Enter a proper State'),
    zipcode:Yup.string().min(5,'Zipcode must be at least 5 characters').max(5,'Zipcode must be 5 characters').required('Please Enter a proper State'),
    cardname:Yup.string().min(3,'Name must be at least 3 characters').required("Please Enter a proper Name "),
    cardNumber:Yup.string().matches(/^\d{16}$/, 'must be 16 digits and only numbers').required('Card number is required'),
    cardMonth:Yup.string().matches(/^(0[1-9]|1[0-2])$/, 'Month must be between 01 and 12').required('Card month is required'),
    cardYear:Yup.string().matches(/^\d{4}$/, 'Year must be a 4-digit number').test(
      'year-range',
      `Year must be ${currentYear} or later`,
      (value) => parseInt(value, 10) >= currentYear
    ).required('Card year is required'),
    cvv:Yup.string()
    .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits')
    .required('CVV is required')
})


export default formSchema