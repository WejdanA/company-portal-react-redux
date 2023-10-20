import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../store'
import { CompanyType } from './types'

export const Companies = () => {
  const { companies, isLoading, error } = useSelector((state: RootState) => state.companiesR)

  return (
    <div>
      {isLoading && <div>The data is loading</div>}
      <div>{error}</div>

      {companies &&
        companies.map((company: CompanyType) => (
          <div key={company.id} className="company">
            <img
              src={company.avatar_url}
              alt="company-logo"
              className="company-img company detail"
            />
            <div className="id company-detail">{company.id}</div>
            <div className="login company-detail">{company.login}</div>
            <div className="description company-detail">{company.description}</div>
            <Link to={`/companies/company/${company.id}`}>
              <button>More Details</button>
            </Link>
            <hr></hr>
          </div>
        ))}
    </div>
  )
}
