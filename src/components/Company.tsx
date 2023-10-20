import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { RootState, AppDispatch } from '../store'
import { fetchCompanyData } from '../features/companiesSlice'

export const Company = () => {
  const { isLoading, error, company } = useSelector((state: RootState) => state.companiesR)
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchCompanyData(id))
  }, [])

  return (
    <>
      {isLoading && <div>The data is loading</div>}
      <div>{error}</div>
      {Object.entries(company).map((detail) => (
        <div key={detail[0]}>
          {detail[0]} : {detail[1]}
        </div>
      ))}
    </>
  )
}
