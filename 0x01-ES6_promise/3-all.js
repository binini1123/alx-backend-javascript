/* eslint-disable no-console */
import {uploadPhoto, createUser } from './utils';

export default function handleProfilesgnup(){
	const photo = uploadPhoto();
	const user = createUser();

	return Promise.all ([photo, user]).them((res) => {
	  console.log('${res[0]).body} ${res[1].firstName} ${res[1].lastName}
	}).catch(() => {
	  console.log('Signup system offline');
	});
}
