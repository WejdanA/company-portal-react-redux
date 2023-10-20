import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { CompanyType } from '../components/types'

const initialState = {
  fetchedCompanies: [],
  companies: [],
  company: [],
  isLoading: false,
  error: ''
}

export const fetchCompaniesData = createAsyncThunk('./companies/fetchComanies', async () => {
  const response = await fetch('https://api.github.com/organizations')
  if (!response.ok) {
    throw 'Network problem'
  }
  const data = await response.json()
  return data
})

export const fetchCompanyData = createAsyncThunk('./companies/fetchCompany', async (id) => {
  const response = await fetch(`https://api.github.com/orgs/${id}`)
  if (!response.ok) {
    throw 'Network problem'
  }
  const data = await response.json()
  return data
})

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: initialState,
  reducers: {
    sortById: (state) => {
      state.companies.sort((a: CompanyType, b: CompanyType) => {
        return a.id - b.id
      })
    },
    sortByName: (state) => {
      state.companies.sort((a: CompanyType, b: CompanyType) => {
        return a.login.localeCompare(b.login)
      })
    },
    search: (state, action) => {
      const searchTerm = action.payload

      state.companies = state.fetchedCompanies.filter((company: CompanyType) => {
        return String(company.id).includes(searchTerm) || company.login.includes(searchTerm)
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompaniesData.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchCompaniesData.fulfilled, (state, action) => {
        state.isLoading = false
        state.fetchedCompanies = action.payload
        state.companies = action.payload
      })
      .addCase(fetchCompaniesData.rejected, (state, action) => {
        state.isLoading = false
        state.error = 'Some Thing Went Wrong'
      })

      .addCase(fetchCompanyData.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchCompanyData.fulfilled, (state, action) => {
        state.isLoading = false
        state.company = action.payload
      })
      .addCase(fetchCompanyData.rejected, (state, action) => {
        state.isLoading = false
        state.error = 'Something Went Wrong'
      })
  }
})

export default companiesSlice.reducer
export const { sortById, sortByName, search } = companiesSlice.actions
