import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className= "student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Gpa: {props.gpa}</p>
            <p>Student: {props.isStudent ? "Yes": "No"}</p>

        </div>
    )

}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gpa: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 1,
    gpa: 1,
    isStudent: false

}
export default Student