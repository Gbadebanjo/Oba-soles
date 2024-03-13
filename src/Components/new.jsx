import React, { useEffect, useState } from 'react';
import SideBar from '../../components/sidebar/sidebar';
import SearchComponents from '../../components/search/search';
import { apiGet } from '../../utils/api';
import { FaStar } from "react-icons/fa";



// import {useState} from 'react';

const HistoryPage = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await apiGet('/orders');
                setHistory(response.data);
                console.log(response.data);
            } catch (error) {
                setError(false);
            }
            setLoading(false);
        };
        fetchHistory();
    }, []); 

    if (loading) return 'Loading...';
    if (error) return 'Error!';


    return (
        <> 
            <div>
                <div>
                    <SideBar/>
                </div>
                <div>
                    <SearchComponents/>
                </div>
                <div className='ml-32'>
                    <p className='flex first-letter: capitalize p-6'>HISTORY</p>
                </div>
                <div>
                    <ul>
                        {history.map((order) => (
                            <li key={order._id}>
                                <div className='ml-32'>
                                    <div className='items-center inline-block justify-center text-sm text-gray-500 ml-14'><p className='text-sm text-gray-500'>Order ID:</p>
                                    <p className='text-black text-sm font-semibold'>#
                                    {order._id.substring(order._id.length - 6)}</p>
                                    <p className='text-sm text-gray-500'>Total:</p> <p className='text-black text-sm font-semibold'>#120,000
                                    {order.totalPrice.toFixed}</p></div>
                                    
                                    <div className='items-center inline-block justify-center text-sm text-gray-500 ml-14'> 
                                    <p className='text-sm'>Payment Method:</p> <p className=''> {order.paymentOption}</p>
                                    {/* <p className='text-sm'>Shipping Method:</p> <p className=''> {order.shipping_method}</p> */}
                                    </div>
                                    <div className='items-center inline-block justify-center text-sm ml-14 text-gray-500'>
                                    <p className='mt-4'>Receiver's Name: {order.receiver_name}</p>
                                    <p className='mt-2'>Receiver's Phone: {order.receiver_phone}</p>
                                    </div> 
                                    <div className='items-center inline-block justify-center text-sm ml-14 text-gray-500'>
                                    <p className=''>Delivery Address: {order.delivery_address}</p>
                                    <p className='mt-2'>Delivery City: {order.delivery_city}</p>
                                    </div>
                                    <div className='items-center inline-block justify-center text-sm ml-14 text-gray-500'>
                                    <p className=''>Order Date: {order.order_date}</p>
                                    <p className='mt-2'>Ratings:</p> <p className='text-blue-500 flex'><FaStar/><FaStar/>
                                    <FaStar/><FaStar className='text-[#ccf0fb]' /> <FaStar className='text-[#ccf0fb]'/>
                                    {order.ratings}</p>
                                    </div>
                                    {/* <p>View Cart & Tracking</p> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
    } 

    export default HistoryPage;