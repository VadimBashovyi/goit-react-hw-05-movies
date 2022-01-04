import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'

import LoaderSpinner from '../components/LoaderSpinner/LoaderSpinner'
import MovieCard from '../components/MovieCard/MovieCard'

import api from '../utils/ApiServices'

const Cast = lazy(() => import('../components'))
