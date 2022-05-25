import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from "../utils/axios";
import {AlertContext} from "../context/Alertcontext";

export default function useSendForms(url, redirect) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {initAlert} = useContext(AlertContext);
  // const navigate = useNavigate()

  // async function postData(data) {
  //   try {
  //     setLoading(true)
  //     const response = await axios.post(url, data);
  //     if (redirect === 'carrito') navigate(`/carrito/${response.data.id}/exito`)
  //     if (redirect === 'orden') navigate(`orden-recibida/${response.data.id}/exito`)
  //     if (!redirect) initAlert(true, 'success', 'Se enviaron los datos con exito!...')
  //     setLoading(false)
  //   } catch (err) {
  //     navigate(`/carrito/error`)
  //     setError(err)
  //     setLoading(false);
  //     initAlert(true, 'error', 'No se pudieron enviar los datos... intenta mas tarde!')
  //     console.log(err)
  //   }
  // }

  function testSnackbars(type) {
    if (type === 'error') {
      initAlert(true, 'error', 'No se pudieron enviar los datos... intenta mas tarde!')
    } else {
      initAlert(true, 'success', 'Se enviaron los datos con exito!...')
    }
  }

  return {
    loading,
    error,
    send: () => testSnackbars(),
  };
}
