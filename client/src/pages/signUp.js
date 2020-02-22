import React, {useContext, useState, useEffect} from 'react';
import {useHttp} from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';
import {AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom'


export const SingUpPage = (props) => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const history = useHistory()
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '',
        password: '',
        username: '',
        bio: ''
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
            const data = await request('/users/signup', 'POST', {...form})
            message(data.message)
            history.push("/")
        } catch (e) {
        }
    }

    const loginHandler = async () => {
        try {
            //
            history.push('/')
        } catch (e) {
        }
    }

    return (
        <div className="row">
            <div className=" col s6 offset-s3">
                <h1>Sign Up</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
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
                            <div className="input-field">
                                <input
                                    placeholder="Введите bio"
                                    id="bio"
                                    type="text"
                                    name="bio"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                    value={form.bio}
                                />
                                <label htmlFor="bio">Bio</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите username"
                                    id="username"
                                    type="text"
                                    name="username"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                    value={form.username}
                                />
                                <label htmlFor="username">Username</label>
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
