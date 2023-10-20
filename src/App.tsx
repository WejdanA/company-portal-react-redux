import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { RootState, AppDispatch } from './store'
import { fetchCompaniesData } from './features/companiesSlice'
import { Companies } from './components/Companies'
import { Sort } from './components/Sort'
import { Search } from './components/Search'

function App() {
  const { companies } = useSelector((state: RootState) => state.companiesR)
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCompaniesData())
  }, [])

  return (
    <div className="App">
      <h1>Companies</h1>
      <Sort />
      <Search />
      <Companies />
    </div>
  )
}

export default App
