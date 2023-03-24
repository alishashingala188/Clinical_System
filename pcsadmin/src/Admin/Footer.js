import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    })
  return (
    <>
     <footer className="footer">
                <div className="container-fluid">
                    <div className="row text-muted">
                        <div className="col-6 text-start">
                            <p className="mb-0">
                                <a className="text-muted" href="https://adminkit.io/" >
                                    <strong>Paperless</strong></a> &copy;
                            </p>
                        </div>
                        <div className="col-6 text-end">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://adminkit.io/">Support</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://adminkit.io/" >Help Center</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://adminkit.io/" >Privacy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="https://adminkit.io/" >Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    </>
    
  )
}

export default Footer