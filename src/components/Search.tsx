import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { RootState } from '../store'
import { search } from '../features/companiesSlice'

export const Search = () => {
  const dispatch = useDispatch()
  const searchHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    dispatch(search(searchTerm))
  }

  return (
    <div id="search">
      <input
        type="text"
        id="search-term"
        placeholder="search by id or login"
        onChange={searchHandle}
      />
    </div>
  )
}
