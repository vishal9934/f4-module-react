

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserFullData } from '../actions';

const Profile = () => {
  const user = useSelector(state => state.getUserData.userAuthData);

  const userFullInfo = useSelector(state => state.updatedUserData.userFullData);
  console.log("updated=>>>",userFullInfo)
  
  //const updatedUser = useSelector(state=> state.updateUserData);
  console.log("initial=>>>",user)
  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${user.id}`);
        const data = await response.json();
        dispatch(setUserFullData(data));
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [user.id, dispatch]);
  

  return (
    Object.keys(userFullInfo).length > 0 ?
    
    <div>
    <div className='navbar'>
        <span>Profile Page</span>
    </div>
        <h1>Welcome, <b>{userFullInfo.firstName} {userFullInfo.lastName}</b></h1>
      <div className='image-container'>
        <img src={userFullInfo.image} alt={userFullInfo.firstName} />
      </div>
      <div className='table-div'>
      <h2>userFullInfo Details :</h2>
        <table>
            <tr>
                <td>Username</td>
                <td>{userFullInfo.username}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{userFullInfo.email}</td>
            </tr>
            <tr>
                <td>Phone No.</td>
                <td>{userFullInfo.phone}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{userFullInfo.gender}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{userFullInfo.age}</td>
            </tr>
            <tr>
                <td>Date of Birth</td>
                <td>{userFullInfo.birthDate}</td>
            </tr>
             <tr>
                <td>Address</td>
                <td>{userFullInfo.address.address}, {userFullInfo.address.city}</td>
            </tr>  
            <tr>
                <td>University</td>
                <td>{userFullInfo.university}</td>
            </tr>
            <tr>
                <td>Company</td>
                <td>{userFullInfo.company.name}</td>
            </tr>
        </table>
      </div>  
    </div> : <div>Loading..</div>
  );
}

export default Profile;