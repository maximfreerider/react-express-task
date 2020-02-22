import React, {useContext, useState, useEffect} from 'react';
import {useHttp} from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';
import {AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom'

export const AuthPage = (props) => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const history = useHistory()
  const {loading, request, error, clearError} = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields();
  }, [])

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const registerHandler = async () => {
    try {
      // const data = await request('/users/signup', 'POST', {...form})
      // message(data.message)
      history.push("/register")
    } catch (e) {
    }
  }

  const loginHandler = async () => {
    try {
      const data = await request('/users/login', 'POST', {...form})
      auth.login(data.token, data.userId)
      history.push('/user')
        console.log(form)
    } catch (e) {
    }
  }

  return (
    <div className="row">
      <div className=" col s6 offset-s3">
        <div className="card blue darken-1">
          <div className="card-content white-text">
          <span className="card-title">Authorization</span>
            <div>

              <div className="input-field">
                <input
                  placeholder="Введите email"
                  id="email"
                  type="text"
                  name="email"
                  className="yellow-input"
                  onChange={changeHandler}
                  value={form.email}
                  />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введите password"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  onChange={changeHandler}
                  value={form.password}
                  />
                <label htmlFor="password">Password</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{marginRight: 10}}
              disabled={loading}
              onClick={loginHandler}
              >Войти
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}>
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
