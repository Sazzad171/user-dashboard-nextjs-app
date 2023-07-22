
// import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';

const UpdateUser = () => {
	const handleImageChange = (e, values) => {
		const selectedFile = e.currentTarget.files[0];
		values.selectedFile = selectedFile;
	}

	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					email: '',
					avatar: ''
				}}

				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required'
					}
					return errors;
				}}

				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						// alert(JSON.stringify(values, null, 2));
						console.log(values);

						// const updateUserInfo = async () => {
						// 	const res = await axios.post('/user/my-profile/update', 
						// 		values,
						// 		{
						// 			headers: {
						// 				Authorization: "Bearer 28|I4bLpPoqEWlgmYh1NpeWVALGh58b2Ti1INGOnavv"
						// 			}
						// 		}
						// 	);
						// 	console.log(res);
						// }
						// updateUserInfo();

						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
				}) => (
					<form onSubmit={handleSubmit}>
						<div className='mb-2'>
							<label>My Name: </label>
							<input type="text" placeholder='input here' className='border border-slate-950 p-1' name="name" onChange={handleChange} value={values.name} onBlur={handleBlur} />
						</div>
						<div className='mb-2'>
							<label>My Email: </label>
							<input type="email" placeholder='input here' className='border border-slate-950 p-1' name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} />
						</div>
						<div className='mb-4'>
							<label htmlFor="avatar">My avatar: </label>
							<input type="file" name="avatar" id="avatar" onChange={(e) => handleImageChange(e, values)} />
						</div>
						{ errors.name }
						<button type='submit' className='text-white bg-blue-800 px-4 py-2 rounded-xl' disabled={isSubmitting}>Update User</button>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default UpdateUser;