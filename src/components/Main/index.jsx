import React from 'react'
// import IconTask from '../IconTask';
import './main.css';

// const tasks = [
//     {icon: <i className="fas fa-file-invoice"></i>, text: 'Make a bill'},
//     {icon: <i className="fas fa-user"></i>, text: 'Create a user'},
// ]
function Main() {
    return (
        <div className='container-main'>
            <main className='main-dashboard'>
                {/* <img src="../../assets/Money.svg" alt="logo"/> */}
                {/* <section >
                    <h2>Welcome, ¿What you want to do?</h2>
                    <div className="wrapper-tasks">
                        {
                            tasks.map(task => (
                                <IconTask icon={task.icon} text={task.text}/>
                            ))
                        }
                    </div>
                </section> */}
            </main>
        </div>
    )
}

export default Main
