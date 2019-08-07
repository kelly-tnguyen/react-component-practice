function TaskItem (props) {
    return (
        <a href="#" className="list-group-item">
            <span className="badge">{props.date}</span>
            <i className="fa fa-fw fa-calendar"></i> {props.taskName}
        </a>
    )
} 