function TaskPanel(props) {
    let tasks = [];
    tasks = props.tasks.map((task,i)=>{
        return <TaskItem key={i} taskName={task.task} date={task.date} />
    })
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
            </div>
            <div className="panel-body">
                <div className="list-group">
                    {tasks}
                </div>
                <div className="text-right">
                    <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>
    )
} 