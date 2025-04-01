import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPlantToCart } from '../actions';
import PlantCard from './PlantCard';
 
const ProductListingPage = () => {
  const plants = useSelector((state) => state.plants);
  const dispatch = useDispatch();