const API_URL = 'http://localhost:3000/user';
import axios from 'axios';
import { toast } from 'sonner';

interface UserData {
  email: string;
  senha: string;
  cargo: string;
  nome: string;
  confirmPassword: string;
}

interface OtpDataGet {
  email: string;
}

interface otpDataPost {
  email: string;
  pin: string;
}

export async function addUser(userData: UserData) {
  const sendData = {
    senha: userData.senha,
    email: userData.email,
    cargo: userData.cargo,
    nome: userData.nome,
  };
  try {
    const response = await axios.post(`${API_URL}/add`, sendData);
    return response.status;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
}

export async function sendOtp(OtpDataGet: OtpDataGet) {
  try {
    const response = await axios.post(`${API_URL}/send-otp`, OtpDataGet);
    return response.status;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
}

export async function verifyOtp(otpDataPost: otpDataPost) {
  try {
    const response = await axios.post('http://localhost:3000/user/verify', {
      email: otpDataPost.email,
      userTotpInput: otpDataPost.pin,
    });

    return response.status;
  } catch (error) {
    toast('Código inválido! ❌', {
      description: 'Código do email está incorreto!',
    });
    console.error('Error verifying OTP:', error);
    throw error;
  }
}
