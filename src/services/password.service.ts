import axios from 'axios'

export const UserService = {
  //no carga desde .env
  // apiUrl: process.env.REACT_APP_API_URL,
  apiUrl: 'https://king-prawn-app-c4wcm.ondigitalocean.app/api/v1/',

  changePassword(password: string) {
    const accessToken = sessionStorage.getItem('Authorization')
    // const empresaRutSinDv = empresaRut.slice(0, -1);
    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    return axios
      .post(`${this.apiUrl}users/change-password`, {
        headers: headers
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error)
      })
  },

  logout() {
    const headers = {
      Authorization: sessionStorage.getItem('token')
    }
    const request = {
      refreshToken: sessionStorage.getItem('refreshToken')
    }
    axios
      .post(`${this.apiUrl}auth/logout`, request, { headers })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        sessionStorage.clear()
      })
  },

  changeCompany() {
    window.location.href = 'http://localhost:9000'
  }
}
