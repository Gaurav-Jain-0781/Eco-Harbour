import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser, FaGift, FaCheckCircle, FaBan, FaImage, FaSearch } from 'react-icons/fa'
import { IoIosCloseCircle } from "react-icons/io";
import { MdLogout, MdDashboard  } from "react-icons/md";
import { GrDocumentVerified } from "react-icons/gr";
import axios from 'axios';
import { toast } from 'react-toastify';

const ImageViewer = ({ imageUrl, onClose }) => {
    console.log(imageUrl)
    return (
        <div className="image-viewer">
            <IoIosCloseCircle onClick={onClose}/>
            <img src={imageUrl} alt="Proof" />
        </div>
    );
};

const Admin = () => {
    const [activeTab, setActiveTab] = useState('dashboard')
    const [admin, setAdmin] = useState({})
    const [userCount, setUserCount] = useState()
    const [users, setUsers] = useState({})
    const [proof, setProof] = useState()
    const [record, setRecord] = useState([])
    const [imageViewerOpen, setImageViewerOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [userName, setUserName] = useState('')

    const navigate = useNavigate()

    const toogleTab = (tab) => {
        setActiveTab(tab)
    }

    const handelClick = async () => {
        try{
            const { data } = await axios.post('/user/logout')
        
            if(data.message === "Logout Successfull"){
                toast.success("Logout Successfull")
                navigate('/')
            }
        } catch (error) {
            toast.error("Logout Failed")
            console.log(error)
        }
    }

    const rewardSail = async(recordId) => {
        try{
            const { data } = await axios.get(`/record/${recordId}`)
            const user_id = data.user_id

            const { data: userData } = await axios.get(`/user/${user_id}`)
            const adminId = admin._id
            
            if(userData){
                try{
                    await axios.post(`/user/approve/${user_id}`)
                    await axios.post(`/record/update/${recordId}`, {
                        adminId
                    })
                    toast.success("Score Updated Successfully")
                } catch (error){
                    if(error.response.data.message === "No User Found"){
                        toast.error("No User Found")
                        console.log(error)
                    } else if (error.response.data.message === "No Record Found") {
                        toast.error("No Record Found")
                        console.log(error)
                    } else if (error.response.data.message === "User Updation Failed") {
                        toast.error("Score Updation Failed")
                        console.log(error)
                    } else if (error.response.data.message === "Score Updation Failed") {
                        toast.error("Record Updation Failed")
                        console.log(error)
                    } else {
                        toast.error("Operation Failed")
                        console.log(error)
                    }
                }
            } else {
                toast.error("Operation Failed")
            }           
        } catch (error) {
            if(error.response.data.message === "No User Found"){
                toast.error("No User Found")
                console.log(error)
            } else {
                toast.error("Operation Failed")
                console.log(error)
            }
        } finally {
            const { data: recordData } = await axios.get('/record')
            setRecord(recordData)
        }
    }

    const rejectSail = async (recordId) => {
        try{
            const { data } = await axios.get(`/record/${recordId}`)
            const user_id = data.user_id

            const { data: userData } = await axios.get(`/user/${user_id}`) 
            const adminId = admin._id
            
            if(userData){
                try{
                    await axios.post(`/record/reject/${recordId}`, {
                        adminId
                    })
                    toast.success("Sail Rejected Successfully")
                } catch (error){
                    if(error.response.data.message === "No Record Found") {
                        toast.error("No Record Found")
                        console.log(error)
                    } else if (error.response.data.message === "Sail Rejection Failed") {
                        toast.error("Sail Rejection Failed")
                        console.log(error)
                    } else {
                        toast.error("Operation Failed")
                        console.log(error)
                    }
                }
            } else {
                toast.error("Operation Failed")
            }
        } catch (error) {
            if(error.response.data.message === "No User Found"){
                toast.error("No User Found")
                console.log(error)
            } else {
                toast.error("Operation Failed")
                console.log(error)
            }
        } finally {
            const { data: recordData } = await axios.get('/record')
            setRecord(recordData)
        }
    }

    const viewProof = async(recordId) => {
        try {
            const { data } = await axios.get(`/record/${recordId}`)

            if (data && data.image){
                const imageUrl = `${data.image.replace(/\\/g, '/')}`;
                let startIndex = imageUrl.indexOf('/images');
                let resultPath = startIndex !== -1 ? imageUrl.substring(startIndex) : '';
            
                setSelectedImage(resultPath)
                setImageViewerOpen(true)
            } else {
                toast.error("Image Not found")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const closeImageViewer = () => {
        setImageViewerOpen(false);
        setSelectedImage(null);
    };

    const handleSelect  = () => {
        const checkboxes = document.querySelectorAll('.suspend:checked')
        const selectedUserIds = Array.from(checkboxes).map(checkbox => checkbox.dataset.userId)
        return selectedUserIds
    } 

    const handelSearch = async() => {
        const { data: userRecord } =  await axios.get('/user/count')
        setUsers(userRecord)

        if(userName){
            const user = users.filter((u) =>  u.user_name === userName)
            setUsers(user)
        }
        else{
            toast.error("Please Enter a User Name")
        }
    }

    const handelSuspend = async () => {
        const userIds = handleSelect()
        try{
            for (const id of userIds) {
                await axios.put(`/user/${id}`);
            }
            toast.success("Users Suspended Successfully");
        } catch (error) {
            if(error.response.data.message === "No User Found"){
                toast.error("No User Found")
                console.log(error)
            } else {
                toast.error("Operation Failed")
                console.log(error)
            }
        }
    }

    useEffect(() => {
        const fetchUserRecords = async () => {
        try {
            const promises = users.map(async user => {
                const id = user._id;
                console.log("User Id", id)
                const { data } = await axios.get(`/record/user/${id}`);
                console.log(data)
                const approvedSails = data.filter(record => record.status === "Verified").length;
                const rejectedSails = data.filter(record => record.status === "Rejected").length;
                
                return {
                    ...user,
                    approvedSails,
                    rejectedSails
                };
            });
            const updatedUsersData = await Promise.all(promises);
            setUsers(updatedUsersData);
        } catch (error) {
            console.log(error);
        }
    };

    fetchUserRecords();
    }, [users])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: adminRecord } = await axios.get('/user/adminProfile')
                setAdmin(adminRecord)

                const { data: userRecord } =  await axios.get('/user/count')
                setUserCount(userRecord.length)
                setUsers(userRecord)

                const { data: recordData } = await axios.get('/record')
                setRecord(recordData)

                const { data: proofRecord } = await axios.get(`/record/count/${adminRecord._id}`)
                setProof(proofRecord)
            } catch (error) {
                console.log(error)
            }
        }   

        fetchData()
    }, [])

    return (
        <>
            <section id='admin'>
                <div className="admin-sidebar">
                    <div>
                        <Link to='#dashboard'><img className='logo' src="/images/logo.png" alt='logo' style={{margin: "0px 30px", borderTop: "none"}}></img></Link>
                    </div>
                    <div>
                    <ul className="admin-nav">
                        <li className={activeTab === 'dashboard' ? 'active' : ''}>
                            <Link onClick={() => toogleTab('dashboard')}>
                                <MdDashboard/>
                                DashBoard
                            </Link>
                        </li>
                        <li className={activeTab === 'verify' ? 'active' : ''}>
                            <Link onClick={() => toogleTab('verify')}>
                                <FaCheckCircle />
                                Verify
                            </Link>
                        </li>
                        <li className={activeTab === 'users' ? 'active' : ''}>
                            <Link onClick={() => toogleTab('users')}>
                                <FaUser/>
                                Manage Users
                            </Link>
                        </li>
                        <li className={activeTab === 'rewards' ? 'active' : ''}>
                            <Link onClick={() => toogleTab('rewards')}>
                                <FaGift/>
                                Rewards 
                            </Link>
                        </li>
                    </ul>
                    </div>
                    <div id='logout'>
                        <button className='btn' onClick={handelClick}>
                            <MdLogout/>
                            Logout
                        </button>
                    </div>
                </div>
            </section>

            <div className="admin-content" id="dashboardContent" style={{ display: activeTab === 'dashboard' ? 'flex' : 'none' }}>
                {admin ? (
                    <>
                    <h1>Admin DashBoard </h1>
                    <div className='dashBoard-card'>
                        <div className='admin-box' style={{backgroundColor: '#5454ffb5'}}>
                            <div className='box-icon'>
                                <GrDocumentVerified/>
                            </div>
                            <div className='box-content'>
                                <h2> {proof} </h2>
                                <p>Proof Verified</p>
                            </div>
                        </div>
                        <div className='admin-box' style={{backgroundColor: '#ff4040c9'}}>
                            <div className='box-icon'>
                                <FaCheckCircle/>
                            </div>
                            <div className='box-content'>
                                <h2 style={{padding: '0px', fontSize: '50px'}}>  Admin </h2>
                                <p> Status </p>
                            </div>
                        </div>
                        <div className='admin-box' style={{backgroundColor: '#f351e4c7'}}>
                            <div className='box-icon'>
                                <FaUser/>
                            </div>
                            <div className='box-content'>
                                <h2> {userCount} </h2>
                                <p> User Count </p>
                            </div>
                        </div>
                    </div>
                </>
                ) : (
                <Spinner/>
                )} 
            </div> 

            {imageViewerOpen && selectedImage && (
                <ImageViewer imageUrl={selectedImage} onClose={closeImageViewer} />
            )}

            <div className="verify-document" id="verify" style={{ display: activeTab === 'verify' ? 'flex' : 'none' }}>
                <h1>Verify Record Documents</h1>
                <div id='sails'>
                    {record.length > 0 ? (
                        <>
                        <h2>Recent Records</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Searched</th>
                                <th>Upload Date</th>
                                <th>Proof</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {record.map((r, index) => {
                                return (
                                <tr key={r._id}>
                                    <td> {index + 1} </td>
                                    <td> {r.search} </td>
                                    <td> {r.updatedAt.slice(0, 10)} </td>
                                    <td> 
                                        {r.image !== "" ? (
                                            <button className='btn view' onClick={() => viewProof(r._id)}>View <FaImage/></button>
                                        ) : (
                                            <p>Proof Not Uploaded</p>
                                        )}
                                    </td>
                                    <td>
                                        <button className="btn approve" onClick={() => rewardSail(r._id)}>Reward <FaCheckCircle/> </button>
                                        <button className="btn reject" onClick={() => rejectSail(r._id)}>Reject <FaBan/> </button>
                                    </td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </table>
                        </>
                    ) : (
                        <p>No Records Uploaded Recently </p>
                    )}
                </div>
            </div>

            <div className='manage-users' style={{display : activeTab === "users" ? 'flex' : 'none'}}>
                <h1> Manage Users</h1>
                <div className='actions'>
                    <input type="text" className='search' placeholder='Search User' id="search" onChange={(e) => setUserName(e.target.value)}/>
                    <button type='button' className='btn search-btn' onClick={handelSearch}>Search <FaSearch/></button>
                    <button type='button' className='btn suspend-btn'onClick={handelSuspend}>Suspend Account</button>
                </div>
                <div id="users">
                    {users.length > 0 ? (
                        <>
                        <table>
                            <thead>
                            <tr>
                                <th>Select</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No</th>
                                <th>Approved</th>
                                <th>Rejected</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user) => {
                                return (
                                <tr key={user._id}>
                                    <td><input className='suspend' type="checkbox" data-user-id={user._id} onChange={() => handleSelect (user._id)}/></td>
                                    <td> {user.user_name} </td>
                                    <td> {user.email ? user.email : " - "} </td>
                                    <td> {user.contact_no}</td>
                                    <td> {user.approvedSails} </td>
                                    <td> {user.rejectedSails} </td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </table>
                        </>
                    ) : (
                        <p>No User Found</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Admin