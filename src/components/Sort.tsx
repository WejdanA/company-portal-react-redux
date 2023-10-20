import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { sortById, sortByName } from '../features/companiesSlice'

export const Sort = () => {
  const dispatch = useDispatch()

  const SortHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value

    if (option == 'id') {
      dispatch(sortById())
      console.log('here sorted by id in sort')
    } else if (option == 'login') {
      dispatch(sortByName())
      console.log('here sorted by login')
    } else {
      dispatch(sortById())
    }
  }

  return (
    <div>
      <select id="sort-critiria" onChange={SortHandle}>
        <option value="default">sort By</option>
        <option value="id">id</option>
        <option value="login">login</option>
      </select>
    </div>
  )
}
