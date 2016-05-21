/* @flow */

import { create } from 'apisauce'
import { API } from '@config'

const api = create({
  baseURL: API,
})

export default api
