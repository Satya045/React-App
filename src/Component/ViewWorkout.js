import React, { useState, useEffect } from 'react'
export default function ViewWorkout() {

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {

        fetch('http://localhost:8000/workouts')

            .then(res => res.json())

            .then((data) => {

                console.log(data)

                setWorkouts(data)

            })

    }, [])

    const deleteWorkout = (id) => {

        let fileteredWorkouts = workouts.filter((workout) => workout.id != id)
        fetch('http://localhost:8000/workouts/' + id, {

            method: "DELETE"

        })

            .then(res => {

                console.log(res);

                return res.json();

            })

            .then((data) => {

                console.log(data)

                setWorkouts(fileteredWorkouts)

            })

    }

    const startTime = (id) => {

        // console.log('Add workout.. ',  time)

        //http post

        fetch('http://localhost:8000/workouts/' + id, {

            method: 'PATCH',

            headers: {

                'Content-type': 'application/json'

            },

            body: JSON.stringify({ startTime: new Date() })

        })
    }

    const endTime = (id, startTime, cbpm) => {

        // console.log('Add workout.. ',  time)

        //http post

        let endTime = new Date();

        let Totalcburn = getDifferenceInMinutes(new Date(startTime), endTime, cbpm);

        console.log(Totalcburn);



        fetch('http://localhost:8000/workouts/' + id, {

            method: 'PATCH',

            headers: {

                'Content-type': 'application/json'

            },

            body: JSON.stringify({ endTime, TotalCalories: Totalcburn })

        })

            .then(res => {

                console.log(res);
            })
    }

    function getDifferenceInMinutes(startTime, endTime, cburn) {

        const diffInMs = Math.abs((endTime - startTime) * cburn);

        return diffInMs / (1000 * 60);

    }


    let workoutList = workouts.map((workout, i) => {

        return (

            <tr key={i}>

                <th scope="row">{workout.id}</th>

                <td>{workout.name}</td>

                <td>{workout.cbpm}</td>

                <td>{workout.Discription}</td>

                <td><button onClick={() => deleteWorkout(workout.id)} className='btn btn-danger'>Delete</button></td>

                <td><button onClick={() => startTime(workout.id)} className='btn btn-primary'>Start Workout</button></td>
                <td><button onClick={() => endTime(workout.id, workout.startTime, workout.cbpm)} className='btn btn-primary'>End Workout</button></td>

                <td>{workout.TotalCalories}</td>
            </tr>

        )
    })

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">CALORIES BURN</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">ACTION</th>
                    <th scope="col">STARTTIME</th>
                    <th scope="col">ENDTIME</th>
                    <th scope="col">TOTALCALORIES</th>
                </tr>
            </thead>
            <tbody>
                {workoutList}
            </tbody>
        </table>
    )
}


