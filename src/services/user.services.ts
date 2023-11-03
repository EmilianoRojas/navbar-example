// import axios from 'axios'
// no importa las variables igual que en react

import axios from 'axios'

// const apiUrl = process.env.REACT_APP_LOGOUT_URL
const apiUrl = 'http://localhost:3001/api/v1/auth/logout'

export async function logout() {
  //   const headers = {
  //     Authorization: sessionStorage.getItem('token')
  //   }
  //   const request = {
  //     refreshToken: sessionStorage.getItem('refreshToken')
  //   }
  //   axios.post(apiUrl, request, { headers }).finally(() => {
  sessionStorage.clear()
  window.location.href = 'http://localhost:3000'
  //   })
}

export function changeCompany() {
  window.location.href = 'http://localhost:9000'
}

export const MenuService = {
  apiLink: 'https://king-prawn-app-c4wcm.ondigitalocean.app/api/v1/',

  getAlert() {
    const accessToken = sessionStorage.getItem('Authorization')

    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    return axios
      .get(`${this.apiLink}cms/barra-emergencias`, {
        headers: headers
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error)
      })
  },
  getBanners() {
    const accessToken = sessionStorage.getItem('Authorization')

    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    return axios
      .get(`${this.apiLink}cms/banners`, {
        headers: headers
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error)
      })
  },
  getServices() {
    const accessToken = sessionStorage.getItem('Authorization')

    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    return axios
      .get(`${this.apiLink}cms/servicios`, {
        headers: headers
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error)
      })
  },
  getFormalities() {
    const accessToken = sessionStorage.getItem('Authorization')

    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    return axios
      .get(`${this.apiLink}cms/tramites`, {
        headers: headers
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error)
      })
  },
  getNews() {
    const accessToken = sessionStorage.getItem('Authorization')

    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    return axios
      .get(`${this.apiLink}cms/noticias`, {
        headers: headers
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error)
      })
  }
}
