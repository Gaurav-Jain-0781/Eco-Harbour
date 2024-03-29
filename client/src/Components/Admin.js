import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser, FaGift, FaChartPie, FaCheckCircle, FaBan, FaImage } from 'react-icons/fa'
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
    const [users, setUsers] = useState()
    const [record, setRecord] = useState([])
    const [imageViewerOpen, setImageViewerOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

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

    const rewardSail = (recordId) => {

    }

    const rejectSail = (recordId) => {

    }

    const viewProof = async(recordId) => {
        try {
            const { data } = await axios.get(`/record/id/${recordId}`)

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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: adminRecord } = await axios.get('/user/adminProfile')
                setAdmin(adminRecord)

                const { data: userRecord } =  await axios.get('/user/count')
                setUsers(userRecord.length)

                const { data: recordData } = await axios.get('/record')
                setRecord(recordData)
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
                        <li className={activeTab === 'analytics' ? 'active' : ''}>
                            <Link onClick={() => toogleTab('analytics')}>
                                <FaChartPie/>
                                Analytics
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
                                <h2> 12 {} </h2>
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
                                <h2> {users} </h2>
                                <p> User Count </p>
                            </div>
                        </div>
                        {/* <div className='box' style={{backgroundColor: '#30f164cc'}}>
                            <div className='box-icon'>
                                <GoGoal/>
                            </div>
                            <div className='box-content'>
                                <h2> {} </h2>
                                <p> Rewards Claimed </p>
                            </div>
                        </div> */}
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
                    <h2>Recent Records</h2>
                    {record.length > 0 ? (
                        <>
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
                        <p>No recent activity.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Admin